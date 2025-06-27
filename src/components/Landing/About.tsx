import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Coffee, Award, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Calendar, value: "8+", label: "Months Experience" },
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
                I'm a Mobile Application Developer with around 8 months of professional experience and a strong background in full-stack and interactive software technologies. I started my journey building mobile apps with Kotlin and React Native, and have since delivered solid freelance and academic projects across web, mobile, and game development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm passionate about crafting clean, efficient code and building meaningful digital experiences. My skills cover React, React Native, Firebase, Tailwind CSS, and Express.js — and I’m always exploring new tools to stay ahead of the curve.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether it's building feature-rich mobile apps or experimenting with Unity for 3D games, I'm constantly leveling up and pushing my creative boundaries.
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