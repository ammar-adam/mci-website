import { portrait } from './assets';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  credentials?: string[];
  photo: string;
  linkedin?: string;
}

// Placeholder professional portraits. Replace `photo` with real headshots.
export const team: TeamMember[] = [
  {
    name: 'Farhan Adam',
    title: 'Chief Executive Officer',
    bio: 'Farhan leads the commercial and administrative activities of Marina Commodities, directing market development for both origination and sales across all global trading desks.',
    credentials: [
      'EVP & Treasurer, Global Pulses Confederation',
      'CGC Licensed Grain Dealer',
    ],
    photo: portrait('1765776830139-72b2184dae5a'),
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Faheem Adam',
    title: 'President',
    bio: 'Faheem draws on decades of international trade experience across Syncotex, Adam & Adam\'s, and Marina Textiles to guide the company\'s strategic direction.',
    photo: portrait('1770452603217-89b4f03e8271'),
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Daiyan Adam',
    title: 'Chief Operating Officer',
    bio: 'Daiyan oversees day-to-day trading operations and pulse procurement. BA from the University of Toronto, MBA from McMaster University.',
    photo: portrait('1764545973653-94c40d993495'),
    linkedin: 'https://linkedin.com',
  },
];
