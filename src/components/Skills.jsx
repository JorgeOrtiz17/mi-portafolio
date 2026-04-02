const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Angular", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)"],
    icon: "💻",
    glow: "group-hover:after:bg-blue-500/10"
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase (Auth & Firestore)", "Node.js", "Gestión de Servidores", "Linux"],
    icon: "📂",
    glow: "group-hover:after:bg-emerald-500/10"
  },
  {
    title: "Data Science & AI",
    skills: ["Python", "PowerBI", "Evaluación de LLMs", "Análisis Exploratorio"],
    icon: "📊",
    glow: "group-hover:after:bg-amber-500/10"
  },
  {
    title: "Especialidades",
    skills: ["Ciberseguridad", "Blockchain", "Contratos Inteligentes", "Metodologías Ágiles"],
    icon: "🛡️",
    glow: "group-hover:after:bg-purple-500/10"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-white tracking-tighter">
          Habilidades Técnicas
        </h2>
        
        {/* REJILLA RESPONSIVE: 1 col en móvil, 2 en tablet, 4 en escritorio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden p-8 rounded-3xl bg-slate-950/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Efecto de Brillo Sutil al pasar el mouse */}
              <div className={`absolute -inset-1 -z-10 group-hover:after:content-[''] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:rounded-3xl ${category.glow} group-hover:after:shadow-[0_0_90px_10px_rgba(255,255,255,0.015)]`}></div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-blue-400 font-bold text-lg">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-300 text-sm flex items-center group/item">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;