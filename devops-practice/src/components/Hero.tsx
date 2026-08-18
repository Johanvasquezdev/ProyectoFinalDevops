import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { InfinityLoop3D } from './InfinityLoop3D';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        iconContainerRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
        
      gsap.to(iconContainerRef.current, {
        y: -10,
        duration: 3,
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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[var(--color-devops-bg)] py-20"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-devops-cyan)] via-[var(--color-devops-bg)] to-[var(--color-devops-bg)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        
        {/* Contenedor del modelo 3D corregido */}
        <div 
          ref={iconContainerRef} 
          className="w-full max-w-sm h-48 md:h-64 lg:h-80 relative cursor-grab active:cursor-grabbing mb-8"
        >
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#64FFDA" intensity={2} />
            <InfinityLoop3D />
            <OrbitControls enableZoom={false} autoRotate={false} />
          </Canvas>
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight"
        >
          Práctica Final <span className="text-[var(--color-devops-cyan)]">DevOps</span>
        </h1>
        
        <p 
          ref={subtitleRef} 
          className="text-lg md:text-xl text-[var(--color-devops-gray)] max-w-2xl mx-auto leading-relaxed"
        >
          Un viaje a través del ciclo de vida del desarrollo de software moderno: desde el código hasta la nube.
        </p>
      </div>
      
      {/* Botón / Indicador de Scroll reposicionado y sin interrupciones */}
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-[var(--color-devops-gray)] uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-2">
          Scroll para explorar
        </span>
        <div className="w-px h-12 bg-[var(--color-devops-cyan)]"></div>
      </div>
    </section>
  );
};

export default Hero;
