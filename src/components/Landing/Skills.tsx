import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    items: [
      { label: "C++", level: 4 },
      { label: "C", level: 6 },
      { label: "C#", level: 7.5 },
      { label: "Java", level: 7.5 },
      { label: "JavaScript / TypeScript", level: 9 },
      { label: "Kotlin", level: 6 },
      { label: "Python", level: 4 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { label: "React.js", level: 8.5 },
      { label: "React Native", level: 8.5 },
      { label: "Tailwind CSS", level: 6 },
      { label: "Express.js", level: 4 },
    ],
  },
  {
    title: "Engine & DBMS",
    items: [
      { label: "Unity", level: 7.5 },
      { label: "MySQL", level: 5.5 },
    ],
  },
  {
    title: "Cloud & Backend Services",
    items: [
      { label: "Firebase Authentication", level: 7 },
      { label: "Firebase Cloud Messaging", level: 6.5 },
    ],
  },
  {
    title: "Human Languages",
    items: [
      { label: "Malay", level: 6.5 },
      { label: "English", level: 8 },
      { label: "Mandarin", level: 9.5 },
      { label: "Cantonese", level: 7 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          My Skill Set
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{item.label}</span>
                      <span>{item.level}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${(item.level / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
