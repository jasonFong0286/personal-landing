import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const educationData = [
    {
      degree: "Bachelor of Computer Science (Honours) in Interactive Software Technology",
      institution: "Tunku Abdul Rahman University of Management and Technology",
      location: "Kuala Lumpur, Malaysia",
      period: "June 2022 – August 2024",
      status: "Degree Holder",
      achievements: [
        "Graduated with Merit",
        "Dean's List Award Recipient (September 2023 Semester)", // ← fixed 'Sememster' typo
        "Relevant coursework: Mobile Development, Software Engineering, 3D Game Development, Object-Oriented Analysis and Design, Data Structures and Algorithms, Artificial Intelligence, Virtual Reality",
        "Final Year Project: 3D Mobile Game – Military Drone Simulator" // ← optional reword
      ],
      gpa: "3.47 / 4.0"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Tunku Abdul Rahman University of Management and Technology",
      location: "Kuala Lumpur, Malaysia",
      period: "June 2020 - May 2022",
      status: "Diploma Holder",
      achievements: [
        "Graduated with Merit",
        "Relevant Coursework: 2D Game Development, Mobile Development, Object-Oriented Programming, Database Development and Management, Web Design and Development",
      ],
      gpa: "3.32/4.0"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic foundation that shaped my journey into software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
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
                        <GraduationCap size={24} className="text-cyan-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="px-4 py-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-full"
                      >
                        <span className="text-green-400 font-semibold text-sm whitespace-nowrap">
                          {edu.status}
                        </span>
                      </motion.div>
                      
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <Award size={20} className="text-yellow-400" />
                    <span className="text-white font-semibold">GPA: {edu.gpa}</span>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.2 + achIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
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

export default Education;
