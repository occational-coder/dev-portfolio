'use client';
import { FadeIn } from './ui/FadeIn';

const SERVICES = [
  {
    num: "LangGraph & LangChain (Agentic Systems)",
    name: "Agentic Workflows",
    desc: "Building multi-agent autonomous systems and stateful reasoning workflows that go beyond simple RAG to solve complex, multi-step logic problems."
  },
  {
    num: "Large Language Models (LLM Engineering)",
    name: "Generative AI Architecture",
    desc: "Mastering prompt engineering, structured output generation, and fine-tuning frontier models for specific domain intelligence."
  },
  {
    num: "HuggingFace Ecosystem (Model Mastery)",
    name: "Open-Source Intelligence",
    desc: "Implementing and optimizing open-source transformers and specialized datasets to build privacy-focused, locally-hosted AI solutions."
  },
  {
    num: "LangSmith (AI Observability)",
    name: "LLM Ops & Monitoring",
    desc: "Using LangSmith for tracing, evaluating, and deeply monitoring LLM applications to ensure production-grade reliability and performance."
  },
  {
    num: "Full-Stack AI Integration (Infrastructure)",
    name: "Scalable AI Infrastructure",
    desc: "Architecting end-to-end intelligent applications using MongoDB, Firebase, and modern React frameworks to deliver seamless AI experiences."
  }
];

export const ServicesSection = () => {
  return (
    <section id="stack" className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 md:mb-28">
  The Stack
</h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((srv, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.1} 
            className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-16 border-b border-[#D7E2EA]/15 py-8 sm:py-10 md:py-12 first:border-t hover:bg-white/[0.02] transition-colors duration-300 px-4 -mx-4 rounded-3xl"
          >
            <span className="text-[#D7E2EA]/40 font-bold uppercase tracking-tight leading-[1.2] lg:w-[45%] shrink-0 text-[1.2rem] md:text-[1.5rem] lg:text-[1.75rem]">
              {srv.num}
            </span>
            <div className="flex flex-col gap-2 lg:w-[55%]">
              <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-widest text-sm md:text-base lg:text-lg">
                {srv.name}
              </h3>
              <p className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-2xl text-sm md:text-base lg:text-[1.1rem]">
                {srv.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
