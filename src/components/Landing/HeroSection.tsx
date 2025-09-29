import { motion } from "framer-motion";
import { ChevronDown, Code2, Zap } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

    const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block p-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 backdrop-blur-sm border border-cyan-400/30 mb-6"
          >
            <Code2 size={48} className="text-cyan-400" />
          </motion.div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-semibold mb-2 text-cyan-400"
        >
          Hi, I'm Jason Fong
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Software Developer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Crafting innovative digital solutions with modern technologies
          <br />
          <span className="text-cyan-400">Building the future, one line of code at a time</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 text-sm text-gray-400"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for freelance
          </span>
          <span>•</span>
          <span>Based in Kuala Lumpur, Malaysia</span>
        </motion.div>
      </motion.div>

      {/* Pressable Chevron */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                   focus:outline-none"
      >
        <ChevronDown
          size={40}
          className="text-cyan-400 opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </motion.button>
    </section>
  );
};

export default HeroSection;