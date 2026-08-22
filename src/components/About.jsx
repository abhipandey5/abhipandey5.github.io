import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import { techStack } from '../data/content';

const coreStack = [
  { category: 'Security & Privacy', items: 'Secure Authentication, Cryptography, Data Security, Identity Attestation' },
  { category: 'AI & Machine Learning', items: 'AI/ML Security, Reinforcement Learning, Federated Learning, Quantum-Safe ML' },
  { category: 'Systems & Infrastructure', items: 'Cyber Physical Systems, IoT, Digital Twins, Blockchain Integration, DLT' },
  { category: 'Domains', items: 'Health Informatics, Medical Cyber-Physical Systems, Banking Applications' }
];

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Philosophy"
          title="Securing the Future of AI"
          subtitle="Bridging cybersecurity and machine learning to build resilient and safe cyber-physical systems."
        />

        <div className="flex flex-col gap-8">
          {/* Top Row: Two Widgets */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left — About Me */}
            <ScrollReveal delay={0.1}>
              <div className="glass-card gradient-border p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-lavender" />
                  <span className="font-mono text-sm tracking-widest uppercase text-lavender font-semibold">
                    About Me
                  </span>
                </div>
                <div className="space-y-4 text-base text-text-secondary leading-relaxed flex-1">
                  <p>
                    I am a Ph.D. Scholar at the Center for Security, Theory and Algorithmic Research (C-STAR) at IIIT Hyderabad. My research is primarily driven by the need to secure critical infrastructure in an increasingly connected world.
                  </p>
                  <p>
                    My academic journey has been dedicated to understanding and classifying various aspects of Cyber Security and Information Security. Specifically, my thesis focuses on the Design and Analysis of Secure Machine Learning-Driven Authentication Mechanisms for Medical Cyber-Physical Systems.
                  </p>
                  <p>
                    By combining foundational security principles with advanced AI paradigms, I aim to develop resilient systems that safeguard sensitive data across healthcare, industrial IoT, and financial sectors.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Research Focus */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card gradient-border p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-pink" />
                  <span className="font-mono text-sm tracking-widest uppercase text-pink font-semibold">
                    Research Focus
                  </span>
                </div>
                <div className="space-y-4 text-base text-text-secondary leading-relaxed flex-1">
                  <p>
                    My current research spans multiple domains at the intersection of security and modern technologies. Key focus areas include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary pl-2">
                    {techStack.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-4">
                    Whether it's quantum-safe digital twins, reinforcement learning-as-a-service, or blockchain-enabled frameworks, I strive to push the boundaries of secure integration.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Row: Core Stack */}
          <ScrollReveal delay={0.3}>
            <div className="glass-card gradient-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-mauve" />
                <span className="font-mono text-sm tracking-widest uppercase text-mauve font-semibold">
                  Core Expertise
                </span>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {coreStack.map((stack, i) => (
                  <div key={i} className="flex flex-col gap-2 p-5 rounded-xl border border-border bg-bg-primary/50 hover:border-lavender/50 transition-colors">
                    <span className="font-mono text-sm font-bold text-text-primary tracking-wider uppercase">
                      {stack.category}
                    </span>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {stack.items}
                    </p>
                  </div>
                ))}
              </div>


            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
