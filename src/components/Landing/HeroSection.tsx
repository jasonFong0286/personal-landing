import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-black"
    >
      <motion.div
        className="text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Hey, I’m Jason Fong 👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-4"
        >
          Mobile Developer | Interactive Software Technologist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          I’m a passionate developer who crafts engaging mobile apps and modern full-stack websites.
          Graduated from Tunku Abdul Rahman University with a degree in Computer Science,
          I blend creativity and code to build impactful digital experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
