import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, RefreshCcw, Box, Server, Cloud, Activity, Shield, FileJson } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const concepts = [
  {
    id: 1,
    title: 'Control de Versiones',
    tool: 'Git & GitHub',
    description: 'Gestión del código fuente, ramificación (branching), fusiones (merging) y control de cambios.',
    icon: <GitBranch size={40} className="text-[#F1502F]" />
  },
  {
    id: 2,
    title: 'Integración Continua',
    tool: 'GitHub Actions',
    description: 'Automatización de compilación y ejecución de pruebas para cada cambio integrado en el repositorio.',
    icon: <RefreshCcw size={40} className="text-[#2088FF]" />
  },
  {
    id: 3,
    title: 'Contenedores',
    tool: 'Docker',
    description: 'Empaquetado de aplicaciones y sus dependencias en contenedores ligeros y portables.',
    icon: <Box size={40} className="text-[#2496ED]" />
  },
  {
    id: 4,
    title: 'Orquestación',
    tool: 'Kubernetes',
    description: 'Automatización del despliegue, escalado y manejo de aplicaciones en contenedores.',
    icon: <Server size={40} className="text-[#326CE5]" />
  },
  {
    id: 5,
    title: 'Infraestructura',
    tool: 'Terraform',
    description: 'Aprovisionamiento y gestión de infraestructura en la nube mediante archivos de definición.',
    icon: <Cloud size={40} className="text-[#7B42BC]" />
  },
  {
    id: 6,
    title: 'Monitoreo',
    tool: 'Prometheus',
    description: 'Recolección de métricas, visualización y alertas para mantener la salud de los sistemas.',
    icon: <Activity size={40} className="text-[#E6522C]" />
  },
  {
    id: 7,
    title: 'Seguridad Continua',
    tool: 'DevSecOps',
    description: 'Integración de análisis de vulnerabilidades y seguridad desde las primeras etapas del desarrollo.',
    icon: <Shield size={40} className="text-[#FFD700]" />
  },
  {
    id: 8,
    title: 'Configuración',
    tool: 'YAML & JSON',
    description: 'Formatos de serialización de datos estándar para definir pipelines, contenedores y recursos.',
    icon: <FileJson size={40} className="text-[#43B02A]" />
  }
];

const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 min-h-screen flex flex-col items-center justify-center bg-[var(--color-devops-bg)] relative z-10 border-t border-[var(--color-devops-gray)]/10">
      <div ref={headerRef} className="text-center mb-12 px-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Línea de Tiempo <span className="text-[var(--color-devops-cyan)]">DevOps</span>
        </h2>
        <p className="text-[var(--color-devops-gray)] max-w-2xl mx-auto text-lg">
          Explora los conceptos fundamentales y las herramientas líderes utilizadas en la ingeniería DevOps para agilizar la entrega de software.
        </p>
      </div>

      {/* Eliminado max-w-6xl para que swiper se centre bien o usar overflow hidden */}
      <div className="w-full px-4 overflow-hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-5xl py-12"
        >
          {concepts.map((concept) => (
            <SwiperSlide 
              key={concept.id} 
              className="bg-[#112240] rounded-2xl border border-[var(--color-devops-cyan)]/20 flex flex-col items-center text-center shadow-2xl p-8"
              // Usamos style directo o clases estrictas de tailwind v4 para forzar el tamaño y que no se estire
              style={{ width: '320px', height: '420px', display: 'flex' }}
            >
              {/* Contenedor del ícono circular forzado */}
              <div className="w-24 h-24 shrink-0 mb-6 rounded-full bg-[var(--color-devops-bg)] flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] border border-[var(--color-devops-gray)]/20">
                {concept.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white tracking-wide">{concept.title}</h3>
              
              <h4 className="text-[var(--color-devops-cyan)] font-mono mb-5 text-sm bg-[var(--color-devops-cyan)]/10 px-4 py-1.5 rounded-full inline-block">
                {concept.tool}
              </h4>
              
              <p className="text-[var(--color-devops-gray)] text-base leading-relaxed">
                {concept.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Timeline;
