const projects = [
  {
    title: "Sistema de Gestión Estudiantil",
    role: "Frontend Developer",
    description: "Interfaces dinámicas con React y Vite para registro académico e integración con Firebase.",
    tags: ["React", "Firebase", "Tailwind"]
  },
  {
    title: "Evaluación de Modelos LLM",
    role: "Analista de Datos",
    description: "Plataforma de visualización de métricas de rendimiento para la toma de decisiones técnicas.",
    tags: ["Python", "PowerBI", "LLMs"]
  },
  {
    title: "Audia",
    role: "Desarrollador Web",
    description: "Aplicación interactiva que genera melodías personalizadas basadas en instrucciones del usuario.",
    tags: ["JavaScript", "Web Audio API"]
  }
];

const Experience = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-slate-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-700 p-6 rounded-xl hover:scale-105 transition-transform border border-slate-600">
            <span className="text-blue-400 text-sm font-semibold uppercase">{project.role}</span>
            <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="bg-slate-900 px-3 py-1 rounded-full text-xs font-mono">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;