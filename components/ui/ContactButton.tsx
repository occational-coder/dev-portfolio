'use client';
export const ContactButton = ({ className = "" }: { className?: string }) => {
  return (
    <button 
      className={`group rounded-full uppercase tracking-[0.2em] text-[#0C0C0C] bg-[#D7E2EA] font-semibold relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(215,226,234,0.3)] active:scale-95 ${className} px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5 text-[11px] sm:text-xs md:text-sm`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        Contact Me
      </span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
};
