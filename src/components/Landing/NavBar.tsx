import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="w-full bg-white/60 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="./assets/img/logo.png" className="h-12 w-12" alt="Priline Logo" />
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Priline</span>
          </Link>

          {/* Nav Actions */}
          <div className="flex items-center gap-4">
            {/* Future nav items like Docs, Pricing, etc. can go here */}

            <Link
              to="/login"
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none"
            >
              <span className="z-10">Sign In</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-sm"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
