// File: src/components/Landing/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a self-taught developer based in Malaysia, currently focusing on freelance web & mobile development.
          I love crafting clean UIs, experimenting with frontend tools, and building beautiful user experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
