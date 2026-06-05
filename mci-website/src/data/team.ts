export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  credentials?: string[];
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Farhan Adam',
    title: 'Chief Executive Officer',
    bio: 'Farhan leads the commercial and administrative activities of Marina Commodities, directing market development for both origination and sales across all global trading desks. He brings deep expertise in pulse and grain markets across Europe, Asia, Africa and the Americas.',
    credentials: [
      'EVP & Treasurer, Global Pulses Confederation',
      'CGC Licensed Grain Dealer',
    ],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Faheem Adam',
    title: 'President',
    bio: 'Faheem draws on decades of international trade experience across Syncotex (Karachi), Adam & Adam\'s, and Marina Textiles to guide the company\'s strategic direction and long-term growth.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Daiyan Adam',
    title: 'Chief Operating Officer',
    bio: 'Daiyan oversees day-to-day trading operations and pulse procurement. He holds a BA from the University of Toronto and an MBA from McMaster University, and has been central to growing Marina\'s market presence in South and Southeast Asia.',
    linkedin: 'https://linkedin.com',
  },
];
