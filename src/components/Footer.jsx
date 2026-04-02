const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 px-10 border-t border-slate-800 text-center">
      <div className="mb-8">
        <h3 className="text-white font-bold text-lg mb-2">Jorge Sebastián Ortiz Humo</h3>
        <p className="text-gray-400 text-sm">Ingeniero de Sistemas en formación | Pamplona, Colombia</p>
      </div>

      {/* Sección de Redes con Iconos de Marca */}
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/JorgeOrtiz17" target="_blank" className="text-gray-500 hover:text-white transition-all scale-125 hover:scale-150">
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/jorge-sebastian-ortiz-humo-241135191/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-all scale-125 hover:scale-150">
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
      </div>

      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} 
      </p>
    </footer>
  );
};

export default Footer;