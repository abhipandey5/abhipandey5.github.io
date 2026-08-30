import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollPosition < 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  const formattedTime = new Intl.DateTimeFormat('en-IN', {
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
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[114px] right-10 z-40"
          >
            <div className="glass-card px-3 py-2 text-left min-w-[170px] border border-border/80 transform rotate-2 hover:-rotate-1 transition-transform duration-300 opacity-90 shadow-[0_0_0_1px_rgba(196,167,231,0.2)]">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
                <span className="text-lavender">IST</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </div>
              <div className="mt-2 text-sm font-mono text-text-primary">
                {formattedTime}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                {formattedDate}
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollClick}
            className="fixed bottom-10 right-10 z-40 flex flex-col items-center gap-2 text-text-muted hover:text-lavender transition-colors cursor-pointer bg-bg-card/50 p-3 rounded-full border border-border backdrop-blur-sm"
            id="global-scroll-indicator"
            aria-label="Scroll down"
          >
            <span className="font-mono text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
