import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { BookOpen, FileText, Award } from 'lucide-react';

const publications = [
  {
    type: 'Journal',
    title: 'Post-Quantum Secure Lattice-Based Authentication Scheme for IoT-Enabled Crop Recommender System',
    venue: 'IEEE Internet of Things Journal, June 2026',
    icon: FileText
  },
  {
    type: 'Journal',
    title: 'Quantum-Safe Digital Twin Authentication for ML-Driven Early Disease Detection in Healthcare Systems',
    venue: 'IEEE Journal of Biomedical and Health Informatics, February 2026',
    icon: FileText
  },
  {
    type: 'Journal',
    title: 'Secure Integration of Cyber Engineering and Medical Cyber-Physical System: A Survey and Open Issues',
    venue: 'ACM Computing Surveys, January 2026',
    icon: FileText
  },
  {
    type: 'Conference',
    title: 'Post-Quantum DLT Framework for Secure Financial Transactions in Banking Applications',
    venue: 'COMSNETS 2026, CSP Workshop [Best Paper Award]',
    icon: Award
  },
  {
    type: 'Conference',
    title: 'Post-Quantum Secure Lattice-Based Authentication Scheme for IoT-Enabled Contactless Smart Payments',
    venue: 'ComComAp 2025, Madrid, Spain',
    icon: FileText
  },
  {
    type: 'Book Chapter',
    title: 'Selecting and Assessing the Importance of Malware Analysis Methods for Web-based Biomedical Services',
    venue: 'Recent advances in Nature Inspired Optimization Algorithms, Techniques and Biomedical Applications. De-Gruyter, 2020',
    icon: BookOpen
  }
];

const Research = () => {
  return (
    <section id="research" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Academic"
          title="Research and Publications"
          subtitle="Advancing the frontiers of Cyber Security and Information Security."
        />

        <p className="mt-4 text-center text-sm text-text-secondary font-medium">
          For full paper list please visit{' '}
          <a
            href="https://scholar.google.com/citations?user=DeFvW2kAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender underline underline-offset-4 decoration-lavender/60 hover:text-pink transition-colors"
          >
            here
          </a>
          .
        </p>
        
        <div className="grid gap-6">
          {publications.map((pub, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="glass-card gradient-border p-6 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:border-lavender/50 transition-colors">
                <div className="p-3 bg-lavender/10 text-lavender rounded-xl group-hover:scale-110 transition-transform">
                  <pub.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs tracking-widest uppercase text-pink/80">
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-lavender transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {pub.venue}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
