'use client';
export const LiveProjectButton = ({ className = "" }: { className?: string }) => {
  return (
    <button className={`group rounded-full border border-white/20 bg-white/5 text-[#D7E2EA] font-medium uppercase tracking-[0.15em] px-8 py-3 sm:px-10 sm:py-3.5 text-[11px] sm:text-xs backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300 drop-shadow-lg ${className}`}>
      <span className="relative z-10 flex items-center gap-2">
        Live Project
        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 block">↗</span>
      </span>
    </button>
  );
};
