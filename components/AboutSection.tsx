'use client';
import { FadeIn } from './ui/FadeIn';
import { ContactButton } from './ui/ContactButton';
import { AnimatedText } from './ui/AnimatedText';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative Images */}
      {/* Top Left */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square pointer-events-none opacity-80">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon 3D" fill className="object-contain" referrerPolicy="no-referrer" />
      </FadeIn>
      
      {/* Bottom Left */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square pointer-events-none opacity-80">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="Abstract 3D" fill className="object-contain" referrerPolicy="no-referrer" />
      </FadeIn>

      {/* Top Right */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square pointer-events-none opacity-80">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego 3D" fill className="object-contain" referrerPolicy="no-referrer" />
      </FadeIn>

      {/* Bottom Right */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] aspect-square pointer-events-none opacity-80">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" fill className="object-contain" referrerPolicy="no-referrer" />
      </FadeIn>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 z-10 max-w-[560px]">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>
        
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText 
            text="I am a 2nd year student of BCA specializing in AI and ML at Parishkar College of Global Excellence, Jaipur. My passion lies in mastering large language models and developing systems that autonomously learn, adapt, and reason at scale."
            className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)] tracking-wide"
          />
        </div>
      </div>
    </section>
  );
};
