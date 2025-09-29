import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Code } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experienceData = [
    {
      title: "Mobile Developer",
      company: "Mochi Technologies Sdn Bhd",
      location: "Kuala Lumpur, Malaysia",
      period: "Oct 2024 – Present",
      type: "Full-time",
      responsibilities: [
        "Built and maintained cross-platform mobile apps using React Native and Redux for both iOS and Android.",
        "Experience in end to end solo mobile application project development, including deployment of the application.",
        "Integrated RESTful APIs, managed global state, and optimized app performance for scalability and responsiveness.",
        "Collaborated with UI/UX designers to deliver clean, user-centered interfaces.",
        "Led code reviews and guided junior developers to maintain a high-quality, maintainable codebase.",
        "Partnered with project and product managers to define requirements, design application flows, and plan feature delivery.",
        "Participated in sprint planning, issue triaging, and documentation to streamline development workflows."
      ],
    },
    {
      title: "Virtual Reality Developer (Internship)",
      company: "Virtual Reality Sdn Bhd",
      location: "Kuala Lumpur, Malaysia",
      period: "Feb 2024 – Aug 2024",
      type: "Internship",
      responsibilities: [
        "Built VR applications using Unity and C# for immersive simulations.",
        "Designed interactive 3D environments for academic research projects.",
        "Collaborated with supervisors and peers to meet project milestones.",
        "Gained hands-on experience in VR interaction design and optimization.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hands-on industry experience building mobile apps and VR solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30"></div>

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute left-6 top-12 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full z-10"
              />

              <div className="ml-20 mb-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                      >
                        <Briefcase size={24} className="text-cyan-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border border-purple-400/30 rounded-full"
                      >
                        <span className="text-purple-300 font-semibold text-sm whitespace-nowrap">
                          {exp.type}
                        </span>
                      </motion.div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.2 + respIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <Code size={16} className="text-cyan-400 mt-1" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;