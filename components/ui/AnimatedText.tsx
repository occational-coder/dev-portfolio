'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        return (
          <Character key={i} char={char} range={[start, end]} progress={scrollYProgress} />
        );
      })}
    </p>
  );
};

const Character = ({ char, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};
