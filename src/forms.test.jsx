import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { COMPANY, FORMS } from './data/content';
import Contact from './components/Contact';
import Enquiry from './components/Enquiry';
import '@testing-library/jest-dom';

function ok() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ success: 'true', message: 'sent' }),
  });
}

function fill(labelText, value) {
  fireEvent.change(screen.getByLabelText(labelText), { target: { value } });
}

beforeEach(() => {
  global.fetch = vi.fn(ok);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('contact form delivery', () => {
  const complete = () => {
    render(<MemoryRouter><Contact /></MemoryRouter>);
    fill('Full Name', 'Omprakash');
    fill('Phone Number', '+919512874009');
    fill('Site Location', 'Bombay');
  };

  it('posts the enquiry to the configured inbox', async () => {
    complete();
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    const [url, init] = global.fetch.mock.calls[0];
    expect(url).toBe(FORMS.endpoint);
    expect(url).toContain(COMPANY.email);
    expect(init.method).toBe('POST');

    const body = JSON.parse(init.body);
    expect(body.Name).toBe('Omprakash');
    expect(body.Phone).toBe('+919512874009');
    expect(body['Site location']).toBe('Bombay');
    expect(body._subject).toBe(FORMS.contactSubject);
  });

  it('confirms only after the service accepts it', async () => {
    complete();
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText(/reached our office/i)).toBeInTheDocument();
  });

  // The bug this whole change exists to fix: a failed send used to report
  // success, so the lead was lost and the visitor waited for a reply.
  it('never claims success when delivery fails', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: false, status: 500, json: () => Promise.resolve({}) }),
    );
    complete();
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/nothing was sent/i);
    expect(screen.queryByText(/message sent/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/reached our office/i)).not.toBeInTheDocument();
  });

  it('does not send an unusable lead with no way to reply', async () => {
    render(<MemoryRouter><Contact /></MemoryRouter>);
    fill('Full Name', 'Omprakash');
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/phone number or an email/i);
    expect(global.fetch).not.toHaveBeenCalled();
  });
});

describe('enquiry form delivery', () => {
  const complete = () => {
    render(<MemoryRouter><Enquiry /></MemoryRouter>);
    fill('NAME', 'Omprakash');
    fill('MOBILE / WHATSAPP', '+919512874009');
    fill('SITE LOCATION', 'Bombay');
  };

  it('posts the configurator selections with the contact details', async () => {
    complete();
    fireEvent.click(screen.getByRole('button', { name: /request a site visit/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    const body = JSON.parse(global.fetch.mock.calls[0][1].body);
    expect(body.Name).toBe('Omprakash');
    expect(body['Site location']).toBe('Bombay');
    expect(body['Type of work']).toBeTruthy();
    expect(body['Finish level']).toBeTruthy();
    expect(body['Carpet area']).toMatch(/sq ft$/);
    expect(body._subject).toBe(FORMS.enquirySubject);
  });

  it('offers a WhatsApp route carrying the same enquiry', () => {
    complete();
    const link = screen.getByRole('link', { name: /whatsapp/i });
    const href = decodeURIComponent(link.getAttribute('href'));

    expect(href).toContain(`wa.me/91${COMPANY.primaryPhone}`);
    expect(href).toContain('Omprakash');
    expect(href).toContain('Bombay');
    expect(href).toContain('Carpet area');
  });
});
