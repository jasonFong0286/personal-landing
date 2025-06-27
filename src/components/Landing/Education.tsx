import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-gray-900 pb-10">
      {/* Campus Hero Image */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src="/assets/inst-profile-header-tar-umt.png"
          alt="TARUMT Campus"
          className="w-full h-full object-cover object-center brightness-90 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent dark:from-black/60"></div>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 text-center"
        >
          <img
            src="/assets/tarumt-logo1.png"
            alt="TARUMT Logo"
            className="mx-auto w-40 mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Tunku Abdul Rahman University of Management and Technology
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Graduated • Malaysia</p>
        </motion.div>
      </div>

      {/* Timeline Entries */}
      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {/* Diploma */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            Diploma in Computer Science
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Built foundational knowledge in programming with <strong>C, C#, Java, Kotlin</strong>,
            and explored web development using <strong>HTML</strong> and <strong>CSS</strong>.
            Gained early exposure to mobile app development.
          </p>
        </motion.div>

        {/* Bachelor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            Bachelor of Computer Science (Hons) in Interactive Software Technology
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Gained deep knowledge of <strong>software design and development</strong> practices including
            <strong> DBMS</strong>, <strong>OOP</strong>, and <strong>OOAD</strong>.
            Worked extensively with <strong>Unity Engine</strong> for game development and 
            explored <strong>machine learning</strong> foundations using <strong>Python</strong>.
            Revisited mobile development using <strong>Kotlin</strong> and <strong>Android Studio</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;