import cvPdf from '../assets/doc/CV JORGE SEBASTIÁN ORTIZ HUMO.pdf';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/JorgeOrtiz17',
    icon: 'fa-brands fa-github',
    hover: 'hover:border-white/50 hover:text-white hover:shadow-[0_0_26px_rgba(255,255,255,0.16)]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jorge-sebastian-ortiz-humo-241135191/',
    icon: 'fa-brands fa-linkedin',
    hover: 'hover:border-blue-400/70 hover:text-blue-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.22)]',
  },
  {
    label: 'Descargar CV',
    href: cvPdf,
    icon: 'fa-solid fa-file-arrow-down',
    hover: 'hover:border-emerald-400/70 hover:text-emerald-300 hover:shadow-[0_0_28px_rgba(16,185,129,0.22)]',
    download: 'CV Jorge Sebastián Ortiz Humo.pdf',
  },
];

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 pt-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Jorge Sebastián Ortiz Humo
      </h1>

      <h2 className="text-xl md:text-2xl text-blue-400 mb-6 text-center">
        Software Engineer | Frontend, Backend & AI Solutions
      </h2>

      <p className="max-w-2xl text-gray-300 mb-6 leading-relaxed text-center">
        Desarrollador Full Stack con experiencia en React, Angular, NestJS y Python. He desarrollado aplicaciones web, dashboards analíticos en Power BI y proyectos de inteligencia artificial enfocados en resolver problemas reales mediante datos y automatización.
      </p>

      <div className="flex items-center gap-4 mb-12">
        {socialLinks.map(({ label, href, icon, hover, download }) => (
          <a
            key={label}
            href={href}
            target={download ? undefined : "_blank"}
            rel={download ? undefined : "noreferrer"}
            download={download}
            aria-label={label}
            title={label}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/55 text-slate-300 transition-all duration-300 hover:-translate-y-1 ${hover}`}
          >
            <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <i className={`${icon} relative z-10 text-2xl`}></i>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-12">
        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 hover:scale-105 transition-all">
          <div className="text-blue-400 mb-4 text-2xl">💻</div>
          <h3 className="font-bold text-lg mb-2">Desarrollo Frontend</h3>
          <p className="text-slate-400 text-sm">
            Interfaces modernas con React y Vite, enfocadas en rendimiento y experiencia de usuario.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-emerald-500/50 hover:scale-105 transition-all">
          <div className="text-emerald-400 mb-4 text-2xl">🗄️</div>
          <h3 className="font-bold text-lg mb-2">Backend & Arquitectura</h3>
          <p className="text-slate-400 text-sm">
            Backend: Node.js (Nest.js), Spring Boot, APIs REST, Firebase.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-amber-500/50 hover:scale-105 transition-all">
          <div className="text-amber-400 mb-4 text-2xl">📊</div>
          <h3 className="font-bold text-lg mb-2">Data & Analytics</h3>
          <p className="text-slate-400 text-sm">
            Análisis con Python y visualización en Power BI para apoyar decisiones estratégicas.
          </p>
        </div>
      </div>

      <a
        href="#projects"
        className="border border-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-600/10 transition"
      >
        Ver Proyectos
      </a>
    </section>
  );
};

export default Hero;
