import { navItems, socialLinks } from '../data/content';

// Custom SVG icons for research platforms
const GoogleScholarIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z"/>
  </svg>
);

const OrcidIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.434h2.297c3.272 0 3.9-2.853 3.9-3.722 0-2.216-1.284-3.712-3.584-3.712h-2.613z"/>
  </svg>
);

const ResearchGateIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.603 12.603 0 0 0-.35 1.907c-.096.98-.144 2.49-.144 4.53 0 2.04.048 3.55.144 4.53.048.49.148.96.3 1.407.16.45.385.86.676 1.234.292.374.617.642.975.803.36.162.744.243 1.152.243.425 0 .835-.09 1.23-.27.397-.18.731-.445 1.003-.795.27-.35.476-.74.616-1.17.14-.43.21-.888.21-1.374 0-.244-.015-.46-.043-.65H16.46V9.86h4.93c.027.203.04.413.04.63 0 1.356-.205 2.52-.618 3.492-.413.974-1.018 1.715-1.815 2.225-.8.51-1.73.765-2.793.765-1.188 0-2.2-.28-3.033-.842-.836-.562-1.47-1.358-1.906-2.387-.434-1.03-.65-2.24-.65-3.63 0-1.39.216-2.597.65-3.628.436-1.03 1.07-1.825 1.906-2.388C14.007.279 15.02 0 16.208 0c.97 0 1.807.2 2.51.598.703.4 1.264.975 1.683 1.725l-1.55.893c-.263-.508-.622-.896-1.076-1.166-.453-.27-.958-.404-1.513-.404-.808 0-1.507.212-2.094.636-.587.425-1.035 1.032-1.344 1.82-.31.79-.465 1.72-.465 2.793 0 1.073.155 2.003.465 2.79.31.788.757 1.393 1.344 1.816.587.422 1.286.634 2.094.634.69 0 1.28-.155 1.77-.464.49-.31.872-.77 1.148-1.38.275-.61.435-1.356.48-2.24h-3.245V7.87h5.015v.163c0 1.7-.24 3.132-.72 4.294-.48 1.163-1.172 2.038-2.076 2.628-.904.59-1.982.884-3.234.884-1.317 0-2.468-.31-3.45-.93-.984-.62-1.74-1.507-2.27-2.66-.527-1.153-.79-2.498-.79-4.033 0-1.536.263-2.88.79-4.034.53-1.153 1.286-2.04 2.27-2.66C13.74.31 14.892 0 16.208 0h.002z"/>
  </svg>
);

const customIcons = {
  scholar: GoogleScholarIcon,
  orcid: OrcidIcon,
  researchgate: ResearchGateIcon,
};

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-sm font-semibold text-text-primary">
                Abhishek Kumar Pandey
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Cyber Security & AI/ML Security Researcher building secure machine learning-driven
              authentication mechanisms for critical cyber-physical systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-text-secondary hover:text-lavender transition-colors cursor-pointer"
                    id={`footer-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
              Research Profiles
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const CustomIcon = customIcons[link.id];
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2.5 rounded-lg border border-border bg-bg-card/50 text-text-secondary hover:text-lavender hover:border-lavender/30 transition-all"
                    id={`footer-social-${link.id}`}
                    aria-label={link.label}
                  >
                    {CustomIcon ? (
                      <CustomIcon size={20} />
                    ) : link.Icon ? (
                      <link.Icon size={20} />
                    ) : null}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono text-lavender bg-bg-secondary/90 border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              abhishek.pandey@research.iiit.ac.in
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Abhishek Kumar Pandey
          </p>
          <p className="font-mono text-xs text-text-muted">
            Built with{' '}
            <span className="text-lavender">Curiosity</span>{' '}&{' '}
            <span className="text-pink">Purpose</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
