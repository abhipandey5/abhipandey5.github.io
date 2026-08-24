import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { socialLinks } from '../data/content';

// Custom SVG icons for research platforms
const GoogleScholarIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z"/>
  </svg>
);

const OrcidIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.434h2.297c3.272 0 3.9-2.853 3.9-3.722 0-2.216-1.284-3.712-3.584-3.712h-2.613z"/>
  </svg>
);

const ResearchGateIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.603 12.603 0 0 0-.35 1.907c-.096.98-.144 2.49-.144 4.53 0 2.04.048 3.55.144 4.53.048.49.148.96.3 1.407.16.45.385.86.676 1.234.292.374.617.642.975.803.36.162.744.243 1.152.243.425 0 .835-.09 1.23-.27.397-.18.731-.445 1.003-.795.27-.35.476-.74.616-1.17.14-.43.21-.888.21-1.374 0-.244-.015-.46-.043-.65H16.46V9.86h4.93c.027.203.04.413.04.63 0 1.356-.205 2.52-.618 3.492-.413.974-1.018 1.715-1.815 2.225-.8.51-1.73.765-2.793.765-1.188 0-2.2-.28-3.033-.842-.836-.562-1.47-1.358-1.906-2.387-.434-1.03-.65-2.24-.65-3.63 0-1.39.216-2.597.65-3.628.436-1.03 1.07-1.825 1.906-2.388C14.007.279 15.02 0 16.208 0c.97 0 1.807.2 2.51.598.703.4 1.264.975 1.683 1.725l-1.55.893c-.263-.508-.622-.896-1.076-1.166-.453-.27-.958-.404-1.513-.404-.808 0-1.507.212-2.094.636-.587.425-1.035 1.032-1.344 1.82-.31.79-.465 1.72-.465 2.793 0 1.073.155 2.003.465 2.79.31.788.757 1.393 1.344 1.816.587.422 1.286.634 2.094.634.69 0 1.28-.155 1.77-.464.49-.31.872-.77 1.148-1.38.275-.61.435-1.356.48-2.24h-3.245V7.87h5.015v.163c0 1.7-.24 3.132-.72 4.294-.48 1.163-1.172 2.038-2.076 2.628-.904.59-1.982.884-3.234.884-1.317 0-2.468-.31-3.45-.93-.984-.62-1.74-1.507-2.27-2.66-.527-1.153-.79-2.498-.79-4.033 0-1.536.263-2.88.79-4.034.53-1.153 1.286-2.04 2.27-2.66C13.74.31 14.892 0 16.208 0h.002z"/>
  </svg>
);

const customIcons = {
  scholar: GoogleScholarIcon,
  orcid: OrcidIcon,
  researchgate: ResearchGateIcon,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedClock = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now);

  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <div className="relative w-full max-w-5xl">
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lavender/20 bg-lavender/5 font-mono text-sm font-semibold tracking-widest uppercase text-lavender">
                <span className="h-1.5 w-1.5 rounded-full bg-lavender animate-pulse" />
                Cybersecurity & ML Security Research
              </span>
            </motion.div>

            {/* Profile Picture */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                <img 
                  src={`${import.meta.env.BASE_URL}abhishek.png`} 
                  alt="Abhishek Kumar Pandey" 
                  className="w-full h-full object-cover object-top rounded-full border-4 border-border shadow-[4px_4px_0px_var(--color-border)]"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="block text-text-primary">Abhishek</span>
              <span className="block gradient-text mt-1">Kumar Pandey</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-text-secondary leading-relaxed"
            >
              Ph.D. Scholar at IIIT Hyderabad specializing in{' '}
              <span className="text-lavender font-medium">Secure Authentication, AI/ML Security</span>{' '}
              and Medical Cyber-Physical Systems.
            </motion.p>

            <motion.blockquote
              variants={itemVariants}
              className="mt-6 max-w-2xl border-l-2 border-lavender/60 bg-bg-card/40 px-4 py-3 text-base italic text-text-secondary shadow-[0_0_0_1px_rgba(196,167,231,0.15)]"
            >
              “Security is not an afterthought; it is the foundation on which trustworthy intelligence is built.”
            </motion.blockquote>

            {/* Social Links & Action Buttons */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((link) => {
                  const CustomIcon = link.customSvg ? customIcons[link.id] : null;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 rounded-xl border border-border bg-bg-card/50 backdrop-blur-sm text-text-secondary hover:text-lavender hover:border-lavender/30 hover:bg-lavender/5 transition-all duration-300"
                      id={`social-${link.id}`}
                      aria-label={link.label}
                    >
                      {CustomIcon ? (
                        <CustomIcon size={28} />
                      ) : link.Icon ? (
                        <link.Icon size={28} />
                      ) : null}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono text-lavender bg-bg-secondary/90 border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-bg-card text-text-primary hover:text-lavender hover:border-lavender/50 hover:bg-lavender/10 transition-all font-medium text-sm sm:text-base cursor-pointer"
                >
                  <Send size={18} />
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
