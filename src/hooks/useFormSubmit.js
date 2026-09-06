import { useState } from 'react';
import { FORMS } from '../data/content';

/**
 * Posts a form payload to FormSubmit and reports what actually happened.
 *
 * The status is deliberately never set to 'sent' unless the service confirmed
 * delivery — an enquiry that failed must not tell the visitor we received it,
 * or the lead is lost silently and they sit waiting for a reply.
 *
 * Keys of `fields` become the row labels in the email, so name them the way
 * they should read in the inbox ('Site location', not 'site_location').
 */
export function useFormSubmit() {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const send = async (fields, { subject, replyTo } = {}) => {
    setStatus('sending');
    setError('');

    try {
      const res = await fetch(FORMS.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          // Renders the fields as a table, matching the rest of our mail.
          _template: 'table',
          // We validate in the UI; FormSubmit's captcha page would break the
          // AJAX flow by returning HTML instead of JSON.
          _captcha: 'false',
          // Lets the office hit Reply and reach the visitor directly.
          ...(replyTo ? { _replyto: replyTo } : {}),
          ...fields,
        }),
      });

      // A non-JSON body means we hit the captcha or an error page, not the API.
      const data = await res.json().catch(() => ({}));

      if (!res.ok || String(data.success) !== 'true') {
        throw new Error(data.message || `Delivery failed (HTTP ${res.status})`);
      }

      setStatus('sent');
      return true;
    } catch (e) {
      // Offline and DNS failures surface here as a TypeError with a vague
      // message, so give the visitor something they can act on instead.
      const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
      setError(
        offline
          ? 'You appear to be offline.'
          : e.message || 'Could not reach the mail service.',
      );
      setStatus('error');
      return false;
    }
  };

  return { status, error, send };
}
