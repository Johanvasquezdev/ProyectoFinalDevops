import { Terminal, GitBranch, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050A15] py-12 border-t border-[var(--color-devops-cyan)]/20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center mb-6 md:mb-0">
          <Terminal size={24} className="text-[var(--color-devops-cyan)] mr-3" />
          <span className="text-white font-bold text-xl tracking-wider">DevOps<span className="text-[var(--color-devops-cyan)]">Final</span></span>
        </div>

        <div className="text-[var(--color-devops-gray)] text-sm text-center md:text-left mb-6 md:mb-0">
          <p>© {new Date().getFullYear()} Práctica Final DevOps.</p>
          <p className="mt-1">Construido con React, Vite, Tailwind CSS, Three.js & GSAP.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-[var(--color-devops-gray)] hover:text-[var(--color-devops-cyan)] transition-colors">
            <GitBranch size={24} />
            <span className="sr-only">Git Repository</span>
          </a>
          <a href="#" className="text-[var(--color-devops-gray)] hover:text-[var(--color-devops-cyan)] transition-colors">
            <Globe size={24} />
            <span className="sr-only">Website</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
