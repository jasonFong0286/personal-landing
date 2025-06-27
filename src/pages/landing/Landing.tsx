import NavBar from '../../components/Landing/NavBar';
import HeroSection from '../../components/Landing/HeroSection';
import Footer from '../../components/Landing/Footer';
import ContactMe from '@/components/Landing/ContactMe';
import About from '@/components/Landing/About';
import Skills from '@/components/Landing/Skills';
import Education from '@/components/Landing/Education';


const Landing = () => {

  return (
    <div className="flex flex-col w-full bg-white">
      <>
        <NavBar />
        <HeroSection />
        <About />
        <Skills />
        <Education />
        <ContactMe/>
        <Footer />
      </>
    </div>
  );
};

export default Landing;
