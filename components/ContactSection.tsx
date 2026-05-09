'use client';
import { FadeIn } from './ui/FadeIn';
import { ContactButton } from './ui/ContactButton';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-20 sm:py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">
        <FadeIn delay={0.1} y={40}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none">
            Get in touch
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={30}>
          <p className="text-[#D7E2EA]/70 font-light text-[clamp(1rem,2vw,1.5rem)] max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's connect and build something awesome together!
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="w-full max-w-sm mt-4">
          <ContactButton className="w-full" />
        </FadeIn>
        
        <FadeIn delay={0.4} y={20} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 mb-8">
          <a href="https://www.linkedin.com/in/satvik-sharma07/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-4 sm:p-5 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
          </a>
          <a href="https://github.com/occational-coder" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-4 sm:p-5 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
          </a>
          <a href="https://www.instagram.com/_sattvikk/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-4 sm:p-5 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
          </a>
          <a href="mailto:backupforsatvik@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-4 sm:p-5 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.5} y={10} className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#D7E2EA]/40 text-xs sm:text-sm font-light uppercase tracking-widest max-w-7xl mx-auto">
        <div>© {new Date().getFullYear()} Satvik.</div>
      </FadeIn>
    </section>
  );
};
