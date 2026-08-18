import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Play, 
  Cloud, 
  Settings, 
  Globe, 
  GitGitlab, 
  TerminalSquare, 
  PieChart, 
  CheckCircle, 
  Kanban, 
  MessageSquare, 
  FileText, 
  Briefcase
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const toolsList = [
  { name: 'GitHub Actions', desc: 'Automatización y CI/CD nativo de GitHub.', icon: <Play size={28} className="text-[#2088FF]" /> },
  { name: 'Azure DevOps', desc: 'Plataforma integral de Microsoft para planificar, colaborar y desplegar.', icon: <Briefcase size={28} className="text-[#0078D7]" /> },
  { name: 'Jenkins', desc: 'Servidor open-source líder en automatización de pipelines CI/CD.', icon: <Settings size={28} className="text-[#D33833]" /> },
  { name: 'Terraform', desc: 'Infraestructura como Código (IaC) para aprovisionar recursos cloud.', icon: <Globe size={28} className="text-[#7B42BC]" /> },
  { name: 'GitLab', desc: 'Plataforma DevOps completa con repositorios, CI/CD y seguridad.', icon: <TerminalSquare size={28} className="text-[#FC6D26]" /> },
  { name: 'AWS', desc: 'Ecosistema líder de servicios en la nube (cómputo, almacenamiento, BD).', icon: <Cloud size={28} className="text-[#FF9900]" /> },
  { name: 'Ansible', desc: 'Automatización simple de TI para configuración y despliegues.', icon: <TerminalSquare size={28} className="text-[#EE0000]" /> },
  { name: 'Grafana', desc: 'Plataforma de monitoreo y observabilidad para visualizar métricas.', icon: <PieChart size={28} className="text-[#F46800]" /> },
  { name: 'Selenium', desc: 'Framework de automatización para pruebas funcionales de aplicaciones web.', icon: <CheckCircle size={28} className="text-[#43B02A]" /> },
  { name: 'Jira', desc: 'Seguimiento de incidencias y gestión de proyectos para equipos ágiles.', icon: <Kanban size={28} className="text-[#0052CC]" /> },
  { name: 'Slack', desc: 'Comunicación en tiempo real y centralización de alertas (ChatOps).', icon: <MessageSquare size={28} className="text-[#E01E5A]" /> },
  { name: 'Notion', desc: 'Espacio de trabajo unificado para documentación, wikis y colaboración.', icon: <FileText size={28} className="text-[#FFFFFF]" /> },
];

const ToolsGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.5)',
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Ecosistema de <span className="text-[var(--color-devops-cyan)]">Herramientas</span>
          </h2>
          <p className="text-[var(--color-devops-gray)] text-lg max-w-2xl mx-auto">
            El arsenal moderno de DevOps integra múltiples herramientas especializadas para abarcar todo el ciclo de vida del software.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toolsList.map((tool, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="bg-[#112240] rounded-2xl p-6 border border-[var(--color-devops-gray)]/20 hover:border-[var(--color-devops-cyan)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)] flex flex-col group cursor-default"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="bg-[#0A192F] p-3 rounded-xl border border-[var(--color-devops-gray)]/10 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{tool.name}</h3>
              </div>
              <p className="text-[var(--color-devops-gray)] text-sm leading-relaxed flex-grow">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
