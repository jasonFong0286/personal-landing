import About from "@/components/Landing/About";
import Contact from "@/components/Landing/Contact";
import Education from "@/components/Landing/Education";
import Footer from "@/components/Landing/Footer";
import HeroSection from "@/components/Landing/HeroSection";
import NavBar from "@/components/Landing/NavBar";
import ParticleBackground from "@/components/Landing/ParticleBackground";
import Projects from "@/components/Landing/Projects";
import Skills from "@/components/Landing/Skills";
import { motion } from "framer-motion";


const Landing = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <NavBar />
      <motion.main className="relative z-10">
        <HeroSection />
        <About />
        <Education />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </motion.main>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
