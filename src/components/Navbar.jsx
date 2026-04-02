import { Home, Briefcase, Cpu, ShieldCheck, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 md:px-10 flex justify-between items-center">
      {/* Logo Limpio */}
      <div className="text-xl font-bold text-white tracking-tighter">
        Sebastian<span className="text-blue-500"> Ortiz</span>
      </div>

      {/* Menú con Iconos */}
      <div className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
        <a href="#home" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
          <Home size={18} className="group-hover:scale-110 transition-transform" />
          Inicio
        </a>
        <a href="#projects" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
          <Briefcase size={18} className="group-hover:scale-110 transition-transform" />
          Proyectos
        </a>
        <a href="#skills" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
          <Cpu size={18} className="group-hover:scale-110 transition-transform" />
          Habilidades
        </a>
        <a href="#certifications" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
          <ShieldCheck size={18} className="group-hover:scale-110 transition-transform" />
          Certificaciones
        </a>
      </div>

      {/* Botón de Contacto */}
      <a 
        href="mailto:sebas171202@gmail.com" 
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
      >
        <Mail size={16} />
        Contáctame
      </a>
    </nav>
  );
};

export default Navbar;