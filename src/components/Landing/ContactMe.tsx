// File: src/components/Landing/ContactMe.tsx
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Want to work together or just say hi? Let’s connect 👇
        </p>
        <a
          href="mailto:jason@example.com"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default ContactMe;
