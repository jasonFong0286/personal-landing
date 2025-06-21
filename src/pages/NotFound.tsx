import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThreeScene from "@/components/ThreeScene";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Background Scene */}
      <ThreeScene />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Lost in the Digital Void
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto">
              The page you're looking for has drifted away into cyberspace. 
              Let's get you back to familiar territory.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Return to Home
            </Button>
            
            <div className="flex justify-center space-x-4 text-sm text-gray-400">
              <button 
                onClick={() => window.history.back()}
                className="hover:text-purple-400 transition-colors"
              >
                ← Go Back
              </button>
              <span>|</span>
              <button 
                onClick={() => window.location.reload()}
                className="hover:text-purple-400 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default NotFound;