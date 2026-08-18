import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, RefreshCcw, Box, Server, Cloud, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
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
    icon: <GitBranch size={48} className="text-[#F1502F]" />
  },
  {
    id: 2,
    title: 'Integración Continua',
    tool: 'GitHub Actions',
    description: 'Automatización de compilación y ejecución de pruebas para cada cambio integrado en el repositorio.',
    icon: <RefreshCcw size={48} className="text-[#2088FF]" />
  },
  {
    id: 3,
    title: 'Contenedores',
    tool: 'Docker',
    description: 'Empaquetado de aplicaciones y sus dependencias en contenedores ligeros y portables.',
    icon: <Box size={48} className="text-[#2496ED]" />
  },
  {
    id: 4,
    title: 'Orquestación',
    tool: 'Kubernetes',
    description: 'Automatización del despliegue, escalado y manejo de aplicaciones en contenedores.',
    icon: <Server size={48} className="text-[#326CE5]" />
  },
  {
    id: 5,
    title: 'Infraestructura como Código',
    tool: 'Terraform',
    description: 'Aprovisionamiento y gestión de infraestructura en la nube mediante archivos de definición.',
    icon: <Cloud size={48} className="text-[#7B42BC]" />
  },
  {
    id: 6,
    title: 'Monitoreo y Observabilidad',
    tool: 'Prometheus & Grafana',
    description: 'Recolección de métricas, visualización y alertas para mantener la salud de los sistemas.',
    icon: <Activity size={48} className="text-[#E6522C]" />
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
    <section ref={sectionRef} className="py-20 min-h-screen flex flex-col items-center justify-center bg-[var(--color-devops-bg)]">
      <div ref={headerRef} className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Línea de Tiempo <span className="text-[var(--color-devops-cyan)]">DevOps</span></h2>
        <p className="text-[var(--color-devops-gray)] max-w-2xl mx-auto">
          Explora los conceptos fundamentales y las herramientas líderes utilizadas en la ingeniería DevOps para agilizar la entrega de software.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper py-10"
        >
          {concepts.map((concept) => (
            <SwiperSlide key={concept.id} className="bg-[#112240] rounded-xl border border-[var(--color-devops-gray)]/30 p-8 flex flex-col items-center text-center shadow-2xl">
              <div className="mb-6 p-4 bg-[var(--color-devops-bg)] rounded-full shadow-inner">
                {concept.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{concept.title}</h3>
              <h4 className="text-[var(--color-devops-cyan)] font-mono mb-4 text-sm bg-[var(--color-devops-cyan)]/10 px-3 py-1 rounded-full inline-block">
                {concept.tool}
              </h4>
              <p className="text-[var(--color-devops-gray)] text-sm leading-relaxed">
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
