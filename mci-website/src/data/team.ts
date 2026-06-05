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
    name: 'Faheem Adam',
    title: 'President',
    bio: '',
    photo: portrait('1770452603217-89b4f03e8271'),
  },
  {
    name: 'Farhan Adam',
    title: 'Chief Executive Officer',
    bio: '',
    photo: portrait('1765776830139-72b2184dae5a'),
  },
  {
    name: 'Daiyan Adam',
    title: 'Chief Operating Officer',
    bio: '',
    photo: portrait('1764545973653-94c40d993495'),
  },
];
