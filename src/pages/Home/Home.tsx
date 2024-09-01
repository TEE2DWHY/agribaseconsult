import Footer from "../../Reusable/Footer/Footer";
import Navbar from "../../Reusable/Navbar/Navbar";
import Subscribe from "../../Reusable/Subscribe/Subscribe";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import HeroSection from "./components/HeroSection";
import Offer from "./components/Offer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Offer />
      <Feedback />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
