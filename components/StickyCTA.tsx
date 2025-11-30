import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface StickyCTAProps {
  onClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-600 text-white px-6 py-4 rounded-full shadow-[0_0_40px_rgba(255,41,41,0.6)] hover:bg-brand-500 transition-all hover:scale-105 border border-brand-400 font-bold font-display tracking-wide"
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Réserver mon Audit Gratuit</span>
          <span className="sm:hidden">Audit Gratuit</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;