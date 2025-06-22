import NavBar from '../../components/Landing/NavBar';
import HeroSection from '../../components/Landing/HeroSection';
import Footer from '../../components/Landing/Footer';
import ContactMe from '@/components/Landing/ContactMe';
import About from '@/components/Landing/About';


const Landing = () => {

  return (
    <div className="flex flex-col w-full bg-white">
      <>
        <NavBar />
        <HeroSection />
        <About />
        <ContactMe/>
        <Footer />
      </>
    </div>
  );
};

export default Landing;
