import {
  Trophy,
  Award,
  Server,
  Network,
  Bot,
  Mail,
} from 'lucide-react';

export const socialLinks = [
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:abhishek.pandey@research.iiit.ac.in',
    Icon: Mail,
    customSvg: false,
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=DeFvW2kAAAAJ&hl=en',
    Icon: null,
    customSvg: true,
  },
  {
    id: 'orcid',
    label: 'ORCID',
    url: 'https://orcid.org/0000-0003-4021-9819',
    Icon: null,
    customSvg: true,
  },
  {
    id: 'researchgate',
    label: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Abhishek-Pandey-29',
    Icon: null,
    customSvg: true,
  },
];

export const techStack = [
  'Secure Authentication',
  'AI/ML Security',
  'Cyber Physical System',
  'Data Security',
  'Health Informatics',
  'Malware Analysis'
];

export const projects = [
  {
    id: 'dlt-quantum-safe',
    title: 'Post-Quantum DLT Framework for Secure Financial Transactions',
    category: 'Research Publication',
    description: "Proposed a post-quantum DLT framework for secure financial transactions in banking applications. Won the Best Paper Award at COMSNETS 2026 (CSP Workshop).",
    tags: ['Post-Quantum Security', 'DLT', 'Financial Security'],
    Icon: Server,
    accentColor: 'mauve',
    link: '#',
  },
  {
    id: 'post-quantum-lattice',
    title: 'Post-Quantum Secure Lattice-Based Authentication',
    category: 'Research Publication',
    description: "Developed a post-quantum secure lattice-based authentication scheme for IoT-enabled contactless smart payments. Presented at ComComAp 2025.",
    tags: ['Lattice-Based Cryptography', 'IoT Security', 'Authentication'],
    Icon: Network,
    accentColor: 'peach',
    link: '#',
  },
  {
    id: 'digital-twin-auth',
    title: 'Quantum-Safe Digital Twin Authentication',
    category: 'Research Publication',
    description: "Published in IEEE Journal of Biomedical and Health Informatics (SCI Impact Factor: 6.8). Designed quantum-safe digital twin authentication for ML-driven early disease detection in healthcare systems.",
    tags: ['Digital Twin', 'Healthcare', 'Quantum-Safe'],
    Icon: Bot,
    accentColor: 'lavender',
    link: '#',
  }
];

export const milestones = [
  {
    id: 'best-paper',
    title: 'Best Paper Award',
    description:
      'COMSNETS 2026, Cybersecurity and Privacy (CSP) Workshop, Bangalore, India.',
    metric: '1st',
    metricLabel: 'Place',
    Icon: Award,
    accentColor: 'lavender',
  },
  {
    id: 'gold-medalist',
    title: 'University Gold Medalist',
    description:
      'Bachelor of Computer Application (BCA), Siddhartha University, Kapilvastu, India.',
    metric: null,
    metricLabel: null,
    Icon: Trophy,
    accentColor: 'pink',
  },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'research', label: 'Research & Publications' },
  { id: 'projects', label: 'Selected Works' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];
