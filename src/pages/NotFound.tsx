import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 flex items-center justify-center overflow-hidden text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#0f172a" } },
          particles: {
            number: { value: 80 },
            color: { value: "#6366f1" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <motion.div
        className="z-10 text-center px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <motion.div
          className="inline-flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-500 text-white p-6 rounded-full shadow-2xl mb-6 animate-spin-slow"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <AlertTriangle className="w-10 h-10" />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mt-4"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Page not found in the matrix.
        </motion.p>

        <motion.a
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:brightness-110 transition-all shadow-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Reality
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
