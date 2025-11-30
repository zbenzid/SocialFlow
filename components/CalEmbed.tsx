import React, { useEffect } from 'react';
import { SectionId } from '../types';

declare global {
  interface Window {
    cal: any;
  }
}

const CalEmbed: React.FC = () => {
  useEffect(() => {
    // Re-trigger Cal embed logic if needed when component mounts
    if (window.cal) {
      window.cal("ns", "devis_express", "ui", {"styles":{"branding":{"brandColor":"#ff2929"}},"hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  return (
    <div 
      id={SectionId.CONTACT} 
      className="w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800"
    >
      <div className="p-4 md:p-8 text-center border-b border-neutral-800">
        <h3 className="text-2xl font-display font-bold text-white mb-2">Passez à l'action</h3>
        <p className="text-neutral-400">Réservez votre créneau de 30min pour discuter de votre croissance.</p>
      </div>
      <div className="h-[700px] w-full relative">
        <button
          data-cal-namespace="devis_express"
          data-cal-link="social-flow/devis-express"
          data-cal-config='{"layout":"month_view"}'
          className="w-full h-full absolute inset-0 flex items-center justify-center text-neutral-500"
        >
          Chargement du calendrier...
        </button>
      </div>
    </div>
  );
};

export default CalEmbed;