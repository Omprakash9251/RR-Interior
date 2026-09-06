import { COMPANY } from '../data/content';
import { WhatsApp } from './Icons';

export default function WhatsAppFab() {
  return (
    <a
      className="wa"
      href={`https://wa.me/91${COMPANY.primaryPhone}`}
      aria-label="WhatsApp us"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsApp />
    </a>
  );
}
