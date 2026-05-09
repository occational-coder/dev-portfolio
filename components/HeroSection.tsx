'use client';
import { FadeIn } from './ui/FadeIn';
import { Magnet } from './ui/Magnet';
import Image from 'next/image';
import { Linkedin, Github, Instagram } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Navigation Pill */}
      <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit pointer-events-auto">
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 bg-[#0C0C0C]/40 backdrop-blur-xl border border-white/10 px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {['About', 'Stack', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[#D7E2EA]/80 text-[10px] sm:text-[11px] md:text-[13px] font-medium uppercase tracking-[0.15em] hover:text-white transition-colors duration-300 relative group truncate">
              {item}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Social Icons */}
      <div className="absolute top-8 md:top-10 right-6 md:right-10 z-50 hidden sm:flex items-center gap-5 md:gap-8 pointer-events-auto">
        <a href="https://www.linkedin.com/in/satvik-sharma07/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#D7E2EA]/70 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Linkedin className="w-5 h-5 md:w-[1.3rem] md:h-[1.3rem]" strokeWidth={1.5} />
        </a>
        <a href="https://github.com/occational-coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#D7E2EA]/70 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Github className="w-5 h-5 md:w-[1.3rem] md:h-[1.3rem]" strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/_sattvikk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#D7E2EA]/70 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Instagram className="w-5 h-5 md:w-[1.3rem] md:h-[1.3rem]" strokeWidth={1.5} />
        </a>
      </div>

      {/* Hero Heading - Moved Z-index up to stay visible */}
      <div className="relative flex-1 flex flex-col items-center justify-start pt-32 sm:pt-40 z-20 pointer-events-none">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[12vw] sm:text-[13vw] md:text-[13vw] lg:text-[14vw] xl:text-[14.5vw] drop-shadow-md">
            Hi, i&apos;m satvik
          </h1>
        </FadeIn>
      </div>

      {/* 3D Magnet Image - Adjusted 'bottom' and 'translate' to move it farther down */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[2%] sm:bottom-[0%] md:bottom-[-5%] lg:bottom-[-5%] xl:bottom-[-8%] z-10 w-[280px] sm:w-[320px] md:w-[420px] lg:w-[480px] xl:w-[540px] pointer-events-none">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} className="pointer-events-auto">
            <div className="relative w-full aspect-[4/5] drop-shadow-2xl">
              <Image 
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
                alt="Satvik Portrait"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Content */}
      <div className="flex justify-start items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-12 z-30 pointer-events-none">
        <FadeIn delay={0.5} y={20}>
          <div className="flex items-center gap-3 text-[#D7E2EA] bg-white/5 border border-white/10 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium uppercase tracking-[0.15em] text-[10px] sm:text-[11px] md:text-xs backdrop-blur-md pointer-events-auto shadow-2xl transition-all duration-300 hover:bg-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            AVAILABLE FOR INTERNSHIPS
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
