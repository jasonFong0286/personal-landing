import { Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ⬅️ Step 1: import this

const HeroSection = () => {

    const navigate = useNavigate(); // ⬅️ Step 2: initialize it

    const handleGetStarted = () => {
        navigate('/login'); // ⬅️ Navigate to the login page
    };

  return (
    <section className="w-full bg-light-sky-blue py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Unite Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Messages
              </span>
              <br />
              In One Platform
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Experience seamless communication by combining the best features of LINE, WeChat, and WhatsApp 
              in one powerful web platform. Connect, share, and collaborate like never before - all from your browser.
            </p>
            
            <div className="flex gap-4">
              <button
              onClick={handleGetStarted} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              ✓ Web-based platform • ✓ No downloads required • ✓ Works in any browser
            </div>
          </div>
          
          {/* Right Content - Mock Chat Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">T</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Priline Chat</div>
                    <div className="text-sm opacity-80">Web Platform • Online</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4 text-sm">
                    Hey! This web platform is amazing 🚀
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-sm ml-8">
                    I love how it combines all messaging features! ✨
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-sm">
                    Welcome to the future of web messaging!
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;