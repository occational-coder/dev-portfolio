'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton } from './ui/LiveProjectButton';
import Image from 'next/image';

const projects = [
  {
    id: '01',
    type: 'AI AGENTS',
    title: 'AGENTIC KNOWLEDGE RETRIEVAL',
    link: '#',
    description: 'A multi-agent LangGraph system designed for autonomous document parsing and reasoning.'
  },
  {
    id: '02',
    type: 'INFRASTRUCTURE',
    title: 'LLM ORCHESTRATION LAYER',
    link: '#',
    description: 'Middleware built on HuggingFace transformers to route requests between open-source models.'
  },
  {
    id: '03',
    type: 'DATA SCIENCE',
    title: 'PREDICTIVE AI ANALYTICS',
    link: '#',
    description: 'A predictive modeling platform utilizing ML workflows to forecast trends with high precision.'
  }
];

const ProjectCard = ({ project, i, total, progress }: any) => {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  // Start shrinking after this card is reached
  const start = i * (1/total);
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  
  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full" style={{ zIndex: i }}>
      <motion.div 
        style={{ scale, top: `calc(10% + ${i * 28}px)` }} 
        className="w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 origin-top relative will-change-transform"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,8vw,5rem)] leading-none">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.type}
              </span>
              <h3 className="text-[#D7E2EA] uppercase text-[clamp(1.25rem,3vw,2rem)] font-medium">
                {project.title}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex flex-1 h-full min-h-0 items-center justify-center p-6 sm:p-10 bg-gradient-to-br from-[#D7E2EA]/10 to-transparent rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 shadow-inner group">
          <p className="text-[#D7E2EA]/80 font-light text-[clamp(1rem,2vw,1.5rem)] text-center max-w-3xl leading-relaxed tracking-wide group-hover:text-white transition-colors duration-500">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24" ref={containerRef}>
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-10 sm:mb-16">
        Project
      </h2>
      
      <div className="relative w-full pb-[10vh]">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} i={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
};
