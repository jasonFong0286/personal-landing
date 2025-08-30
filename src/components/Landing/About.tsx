import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Coffee, Award, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Calendar, value: "11+", label: "Months Experience" },
    { icon: Award, value: "5", label: "Projects Built" },
    { icon: Coffee, value: "300+", label: "Cups of Coffee" },
    { icon: User, value: "3+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a Mobile Application Developer with <span className="text-cyan-400 font-semibold">11 months of professional experience </span> 
                building cross-platform mobile apps using React Native and Redux. Beyond coding, I’ve also stepped into team lead–style responsibilities — 
                from reviewing code and mentoring teammates to collaborating with project and product managers on requirements and flow design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey started with Kotlin and React Native, and since then I’ve delivered projects spanning web, mobile, and interactive 3D software. 
                I thrive on writing clean, scalable code while keeping delivery on track — whether it’s managing my own tasks or ensuring the team 
                hits sprint goals.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Skilled in React, React Native, Firebase, Tailwind CSS, and Express.js, I’m passionate about crafting meaningful digital experiences. 
                Whether it’s shipping production-ready apps or experimenting with Unity for 3D games, I’m always pushing my boundaries and leveling up.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="inline-block p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 mb-4"
                >
                  <stat.icon size={24} className="text-cyan-400" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;