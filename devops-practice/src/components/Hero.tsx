import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Terminal } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the hero animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        iconRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
        
      // Continuous floating animation for the icon
      gsap.to(iconRef.current, {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[var(--color-devops-bg)]"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-devops-cyan)] via-[var(--color-devops-bg)] to-[var(--color-devops-bg)]" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div ref={iconRef} className="mb-6 p-4 rounded-full bg-[var(--color-devops-blue)] border-2 border-[var(--color-devops-cyan)] shadow-[0_0_15px_rgba(100,255,218,0.5)]">
          <Terminal size={64} className="text-[var(--color-devops-cyan)]" />
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          Práctica Final <span className="text-[var(--color-devops-cyan)]">DevOps</span>
        </h1>
        
        <p 
          ref={subtitleRef} 
          className="text-xl md:text-2xl text-[var(--color-devops-gray)] max-w-2xl"
        >
          Un viaje a través del ciclo de vida del desarrollo de software moderno: desde el código hasta la nube.
        </p>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <p className="text-[var(--color-devops-gray)] uppercase tracking-widest text-sm">Scroll para explorar</p>
        <div className="w-px h-16 bg-[var(--color-devops-cyan)] mx-auto mt-2"></div>
      </div>
    </section>
  );
};

export default Hero;
