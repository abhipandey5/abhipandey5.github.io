import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Professional"
          title="Work Experience"
          subtitle="Applying systems engineering and AI research in professional environments."
        />
        
        <div className="space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="glass-card gradient-border p-8 h-full flex flex-col items-start justify-center min-h-[200px]">
              <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Research Scholar (Ph.D.)
                  </h3>
                  <p className="text-lavender font-medium mt-1 text-lg">International Institute of Information Technology (IIIT), Hyderabad</p>
                </div>
                <span className="font-mono text-sm tracking-widest text-text-muted font-semibold bg-bg-secondary px-4 py-2 rounded-full whitespace-nowrap">
                  07/2022 – Present
                </span>
              </div>
              <ul className="text-base text-text-secondary max-w-4xl list-disc pl-5 space-y-3 marker:text-lavender">
                <li>Working under the supervision of Prof. Ashok Kumar Das at the Center for Security, Theory and Algorithmic Research (C-STAR).</li>
                <li>Design and Analysis of Secure Machine Learning-Driven Authentication Mechanisms for Medical Cyber-Physical Systems.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card gradient-border p-8 h-full flex flex-col items-start justify-center min-h-[150px]">
              <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Exchange Program Researcher
                  </h3>
                  <p className="text-lavender font-medium mt-1 text-lg">NTNU & USN, Norway</p>
                </div>
                <span className="font-mono text-sm tracking-widest text-text-muted font-semibold bg-bg-secondary px-4 py-2 rounded-full whitespace-nowrap">
                  Nov 2025
                </span>
              </div>
              <ul className="text-base text-text-secondary max-w-4xl list-disc pl-5 space-y-3 marker:text-lavender">
                <li>Visiting Researcher under UTFORSK Project "Cyber Security for Critical Infrastructure".</li>
                <li>Hosted by Prof. Mohsen Toorani (USN) and Prof. Sokratis Katsikas (NTNU).</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card gradient-border p-8 h-full flex flex-col items-start justify-center min-h-[150px]">
              <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Researcher
                  </h3>
                  <p className="text-lavender font-medium mt-1 text-lg">Babasaheb Bhimrao Ambedkar University, Lucknow</p>
                </div>
                <span className="font-mono text-sm tracking-widest text-text-muted font-semibold bg-bg-secondary px-4 py-2 rounded-full whitespace-nowrap">
                  09/2020 – 08/2021
                </span>
              </div>
              <ul className="text-base text-text-secondary max-w-4xl list-disc pl-5 space-y-3 marker:text-lavender">
                <li>Information Technology Laboratory researcher under the supervision of Prof. R. A. Khan.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
