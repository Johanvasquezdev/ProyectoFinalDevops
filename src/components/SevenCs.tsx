import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, GitMerge, TestTube2, Rocket, MessageCircle, Activity, Cog } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  { id: 1, name: 'Continuous Development', color: 'from-[#4F46E5] to-[#7C3AED]', icon: <Code size={32} /> },
  { id: 2, name: 'Continuous Integration', color: 'from-[#2563EB] to-[#4F46E5]', icon: <GitMerge size={32} /> },
  { id: 3, name: 'Continuous Testing', color: 'from-[#9333EA] to-[#C026D3]', icon: <TestTube2 size={32} /> },
  { id: 4, name: 'Continuous Deployment', color: 'from-[#EAB308] to-[#F59E0B]', icon: <Rocket size={32} /> },
  { id: 5, name: 'Continuous Feedback', color: 'from-[#3B82F6] to-[#60A5FA]', icon: <MessageCircle size={32} /> },
  { id: 6, name: 'Continuous Monitoring', color: 'from-[#D946EF] to-[#EC4899]', icon: <Activity size={32} /> },
  { id: 7, name: 'Continuous Operations', color: 'from-[#FBBF24] to-[#F59E0B]', icon: <Cog size={32} /> },
];

const SevenCs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.5, rotationY: 90 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-devops-bg)] relative z-10 border-t border-[var(--color-devops-gray)]/10 overflow-hidden">
      {/* Background Code Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'10\' y=\'20\' font-family=\'monospace\' font-size=\'14\' fill=\'%2364FFDA\'%3E%3C/%3E%3C/text%3E%3Ctext x=\'60\' y=\'60\' font-family=\'monospace\' font-size=\'14\' fill=\'%2364FFDA\'%3E%7B%7D%3C/text%3E%3C/svg%3E")' }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Las <span className="text-[var(--color-devops-cyan)]">7 Cs</span> de DevOps
          </h2>
          <p className="text-[var(--color-devops-gray)] text-lg max-w-2xl mx-auto">
            El ciclo de vida completo de la ingeniería DevOps se divide en estas siete fases continuas, formando un bucle infinito de mejora.
          </p>
        </div>

        {/* Circular / Wrapping layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={phase.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="relative w-40 h-40 md:w-48 md:h-48 group perspective-1000"
            >
              <div className="w-full h-full relative rounded-full bg-[var(--color-devops-blue)]/50 backdrop-blur-md flex flex-col items-center justify-center p-4 border border-white/10 bg-clip-padding group-hover:scale-105 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                {/* Gradient Border Trick */}
                <div className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-br ${phase.color} opacity-80 group-hover:opacity-100 blur-[2px]`}></div>
                <div className="absolute inset-1 bg-[#0A192F] rounded-full -z-10"></div>
                
                <div className="mb-3 text-white">
                  {phase.icon}
                </div>
                <h3 className="text-center font-bold text-sm md:text-base text-white leading-tight">
                  <span className="block text-[var(--color-devops-cyan)] font-mono text-xs mb-1">Fase {phase.id}</span>
                  {phase.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SevenCs;
