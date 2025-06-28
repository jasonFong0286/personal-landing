import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Instagram, Briefcase } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -50% 0px", // triggers when top of footer hits halfway up viewport
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/JasonFong86", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jason-fong-7011132a4/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ahfong286", label: "Instagram" },
    { icon: Briefcase, href: "https://my.jobstreet.com/profile/fong-tzehao-mZtrxjHMhf", label: "JobStreet" }
  ];

  return (
    <footer className="relative z-10 py-8 px-6 bg-slate-900/80 border-t border-cyan-400/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2025 Jason Fong. Built with React, Tailwind CSS & Framer Motion.
            </p>
          </div>
          
          {/* <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 hover:from-cyan-400/30 hover:to-purple-400/30 transition-all border border-cyan-400/20"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-cyan-400" />
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;