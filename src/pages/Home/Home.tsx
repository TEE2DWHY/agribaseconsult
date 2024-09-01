import Footer from "../../Reusable/Footer/Footer";
import Navbar from "../../Reusable/Navbar/Navbar";
import Subscribe from "../../Reusable/Subscribe/Subscribe";
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
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
