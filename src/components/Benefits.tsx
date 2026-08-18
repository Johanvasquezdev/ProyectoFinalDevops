import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, ShieldCheck, TrendingUp, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Velocidad de Entrega',
    description: 'Automatización de procesos para lanzar nuevas características y corregir errores más rápido.',
    icon: <Zap size={32} className="text-[var(--color-devops-cyan)]" />
  },
  {
    title: 'Confiabilidad',
    description: 'Prácticas como integración y entrega continuas aseguran que los cambios sean funcionales y seguros.',
    icon: <ShieldCheck size={32} className="text-[var(--color-devops-cyan)]" />
  },
  {
    title: 'Escalado Automático',
    description: 'La infraestructura como código permite gestionar entornos complejos de forma escalable y repetible.',
    icon: <TrendingUp size={32} className="text-[var(--color-devops-cyan)]" />
  },
  {
    title: 'Colaboración',
    description: 'Rompe los silos entre desarrollo y operaciones, creando una cultura de responsabilidad compartida.',
    icon: <Users size={32} className="text-[var(--color-devops-cyan)]" />
  }
];

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0A192F] relative z-10 border-t border-[var(--color-devops-gray)]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">¿Por qué <span className="text-[var(--color-devops-cyan)]">DevOps</span>?</h2>
          <p className="text-[var(--color-devops-gray)] text-lg max-w-2xl mx-auto">
            La adopción de la cultura DevOps transforma radicalmente la forma en que las organizaciones construyen, prueban y despliegan software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-[var(--color-devops-blue)]/40 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-[var(--color-devops-blue)]/60 hover:border-[var(--color-devops-cyan)]/50 transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="bg-[#0A192F] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-[var(--color-devops-gray)] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
