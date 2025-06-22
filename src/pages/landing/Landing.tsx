import NavBar from '../../components/Landing/NavBar';
import HeroSection from '../../components/Landing/HeroSection';
import Features from '../../components/Landing/Features';
import Footer from '../../components/Landing/Footer';


const Landing = () => {

  return (
    <div className="flex flex-col w-full bg-white">
      <>
        <NavBar />
        <HeroSection />
        <Features />
        <Footer />
      </>
    </div>
  );
};

export default Landing;
