import Footer from "../../Reusable/Footer/Footer";
import Navbar from "../../Reusable/Navbar/Navbar";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Offer from "./components/Offer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;
