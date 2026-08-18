import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cog, TestTube, Rocket, MonitorCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Pipeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const horizontalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Creamos un timeline que se repita infinitamente para simular el ciclo continuo CI/CD
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        repeat: -1, // Repetición infinita
        repeatDelay: 1 // Espera 1 segundo antes de reiniciar
      });

      // Primero ocultamos todos los elementos al inicio del ciclo
      tl.set(stepsRef.current, { scale: 0.8, opacity: 0.5, borderColor: 'rgba(255,255,255,0.1)' });
      tl.set(horizontalLinesRef.current, { width: 0, opacity: 0 });
      tl.set(verticalLinesRef.current, { height: 0, opacity: 0 });

      stepsRef.current.forEach((step, index) => {
        // Animate the step node (encenderlo)
        tl.to(
          step,
          { scale: 1.1, opacity: 1, borderColor: '#22c55e', duration: 0.4, ease: 'back.out(1.7)' }
        );
        tl.to(
          step,
          { scale: 1, duration: 0.2, ease: 'power1.out' }
        );

        // Animate the connecting line if it exists
        if (index < stepsRef.current.length - 1) {
          if (horizontalLinesRef.current[index]) {
            tl.fromTo(
              horizontalLinesRef.current[index],
              { width: 0, opacity: 0 },
              { width: '100%', opacity: 1, duration: 0.5, ease: 'power1.inOut' }
            );
          }
          if (verticalLinesRef.current[index]) {
            tl.fromTo(
              verticalLinesRef.current[index],
              { height: 0, opacity: 0 },
              { height: '100%', opacity: 1, duration: 0.5, ease: 'power1.inOut' },
              '<' // Ejecutar al mismo tiempo que la línea horizontal
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    { name: 'Código', icon: <Code2 size={24} />, color: 'text-blue-400' },
    { name: 'Build', icon: <Cog size={24} />, color: 'text-yellow-400' },
    { name: 'Test', icon: <TestTube size={24} />, color: 'text-red-400' },
    { name: 'Deploy', icon: <Rocket size={24} />, color: 'text-green-400' },
    { name: 'Monitor', icon: <MonitorCheck size={24} />, color: 'text-purple-400' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-devops-bg)] relative z-10 border-t border-[var(--color-devops-gray)]/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Arquitectura <span className="text-[var(--color-devops-cyan)]">CI/CD</span></h2>
          <p className="text-[var(--color-devops-gray)] text-lg max-w-2xl mx-auto">
            El flujo continuo garantiza que el código pase rápidamente desde el entorno local de desarrollo hasta producción de forma segura.
          </p>
        </div>

        <div className="relative mt-20 mb-10 w-full">
          {/* Contenedor flexible para el pipeline */}
          <div className="flex flex-col md:flex-row w-full relative z-10 gap-y-16 md:gap-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center relative group">
                
                {/* Línea conectora horizontal (oculta en el último elemento) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[50%] w-full h-1 z-0">
                    <div className="absolute inset-0 bg-[var(--color-devops-blue)]/30 backdrop-blur-sm rounded-full"></div>
                    <div 
                      ref={el => horizontalLinesRef.current[index] = el}
                      className="absolute inset-y-0 left-0 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                    ></div>
                  </div>
                )}

                {/* Línea conectora vertical para versión móvil */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-[5.5rem] left-[50%] -translate-x-1/2 h-16 w-1 z-0 bg-[var(--color-devops-blue)]/30 backdrop-blur-sm rounded-full">
                    <div 
                      ref={el => verticalLinesRef.current[index] = el}
                      className="absolute inset-x-0 top-0 w-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                    ></div>
                  </div>
                )}

                {/* Nodo del pipeline */}
                <div 
                  ref={el => stepsRef.current[index] = el}
                  className="flex flex-col items-center z-10 transition-colors duration-300 border-2 rounded-full border-transparent"
                >
                  <div className={`w-20 h-20 rounded-full bg-[#0A192F] backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] mb-4 ${step.color} relative z-10`}>
                    {step.icon}
                  </div>
                  <span className="font-mono font-bold text-white tracking-wider bg-[var(--color-devops-bg)] px-2">{step.name}</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
