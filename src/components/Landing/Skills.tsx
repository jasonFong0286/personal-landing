import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript / TypeScript", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "Java", level: 75, color: "from-red-500 to-orange-600" },
        { name: "C#", level: 75, color: "from-indigo-500 to-purple-600" },
        { name: "Kotlin", level: 60, color: "from-pink-400 to-red-400" },
        { name: "Python", level: 40, color: "from-yellow-300 to-orange-300" },
        { name: "C", level: 70, color: "from-blue-500 to-cyan-500" },
        { name: "C++", level: 40, color: "from-gray-400 to-blue-400" },
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React / React Native", level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "Tailwind CSS", level: 60, color: "from-teal-400 to-blue-500" },
        { name: "Express.js", level: 35, color: "from-green-400 to-emerald-500" },
        { name: "Unity Engine", level: 75, color: "from-purple-600 to-violet-700" },
        { name: "Firebase (Auth & FCM)", level: 70, color: "from-amber-400 to-yellow-500" },
        { name: "MySQL", level: 55, color: "from-blue-600 to-indigo-500" },
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "Mandarin", level: 95, color: "from-red-500 to-orange-500" },
        { name: "English", level: 80, color: "from-blue-400 to-cyan-500" },
        { name: "Cantonese", level: 70, color: "from-yellow-400 to-amber-500" },
        { name: "Malay", level: 65, color: "from-green-500 to-lime-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.3 }}
                          className="absolute right-0 top-0 w-2 h-full bg-white/50 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;