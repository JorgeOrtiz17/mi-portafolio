const certifications = [
  {
    title: "Apropiación de los Conceptos en Ciberseguridad",
    issuer: "SENA",
    date: "2026",
    color: "from-red-950/20 to-orange-950/10",
    border: "border-red-900/40",
    glow: "group-hover:after:shadow-[0_0_90px_10px_rgba(239,68,68,0.15)]",
    // Eliminamos iconColor ya que usaremos la imagen
  },
  {
    title: "Blockchain: Contratos Inteligentes",
    issuer: "SENA",
    date: "2026",
    color: "from-blue-950/20 to-indigo-950/10",
    border: "border-blue-900/40",
    glow: "group-hover:after:shadow-[0_0_90px_10px_rgba(59,130,246,0.15)]",
  },
  {
    title: "Aplicación de la IA en la Integración de Datos",
    issuer: "SENA",
    date: "2026",
    color: "from-emerald-950/20 to-teal-950/10",
    border: "border-emerald-900/40",
    glow: "group-hover:after:shadow-[0_0_90px_10px_rgba(16,185,129,0.15)]",
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-10 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Certificaciones <span className="text-blue-500">Oficiales</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden p-7 rounded-3xl bg-gradient-to-br ${cert.color} border ${cert.border} transition-all duration-300 group hover:-translate-y-2`}
            >
              {/* Efecto Glow */}
              <div className={`absolute -inset-10 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 after:content-[''] after:absolute after:inset-10 after:-z-10 after:rounded-3xl ${cert.glow}`}></div>

              <div className="relative z-10 flex justify-between items-start mb-6">
                {/* Contenedor del Logo del SENA */}
                <div className="p-1 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center w-14 h-14 overflow-hidden">
                  <img 
                    src="/Sena-logo.png" 
                    alt="Logo SENA"
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{cert.date}</span>
              </div>
              
              <h3 className="text-white font-bold text-xl leading-tight mb-3">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <p className="text-slate-300 text-sm font-medium">
                  Emitido por <span className="text-white">{cert.issuer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;