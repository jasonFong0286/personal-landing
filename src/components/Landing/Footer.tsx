const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-6 bg-slate-900/80 border-t border-cyan-400/20">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-400">
            © 2025 Jason Fong. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;