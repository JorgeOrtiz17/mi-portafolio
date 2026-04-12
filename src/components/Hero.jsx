const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 pt-24">
      
      {/* Nombre */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Jorge Sebastián Ortiz Humo
      </h1>

      {/* Subtítulo */}
      <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
        Estudiante de Ingeniería de Sistemas (10° Semestre)
      </h2>

      {/* Descripción */}
      <p className="max-w-2xl text-gray-300 mb-10 leading-relaxed">
        Ingeniero de Sistemas orientado a la arquitectura de soluciones, 
        con un enfoque integral que combina desarrollo Full-Stack, análisis de datos e inteligencia artificial 
        para crear productos escalables, eficientes y centrados en el valor del negocio. 
        Me especializo en integrar tecnologías y metodologías que permiten transformar datos en decisiones 
        estratégicas y soluciones innovadoras.
      </p>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-12">
        
        {/* Frontend */}
        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 hover:scale-105 transition-all">
          <div className="text-blue-400 mb-4 text-2xl">💻</div>
          <h3 className="font-bold text-lg mb-2">Desarrollo Frontend</h3>
          <p className="text-slate-400 text-sm">
            Interfaces modernas con React y Vite, enfocadas en rendimiento y experiencia de usuario.
          </p>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-emerald-500/50 hover:scale-105 transition-all">
          <div className="text-emerald-400 mb-4 text-2xl">🗄️</div>
          <h3 className="font-bold text-lg mb-2">Backend & Arquitectura</h3>
          <p className="text-slate-400 text-sm">
            Integración con Firebase, manejo de datos en tiempo real y lógica de negocio robusta.
          </p>
        </div>

        {/* Data */}
        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-amber-500/50 hover:scale-105 transition-all">
          <div className="text-amber-400 mb-4 text-2xl">📊</div>
          <h3 className="font-bold text-lg mb-2">Data & Analytics</h3>
          <p className="text-slate-400 text-sm">
            Análisis con Python y visualización en Power BI para apoyar decisiones estratégicas.
          </p>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://github.com/JorgeOrtiz17"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition"
        >
          GitHub
        </a>

        <a
          href="#projects"
          className="border border-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-600/10 transition"
        >
          Ver Proyectos
        </a>
      </div>
    </section>
  );
};

export default Hero;