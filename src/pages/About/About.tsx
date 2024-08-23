import AboutHero from "./components/AboutHero";
import AboutBody2 from "./components/AboutBody2";
import AboutBody1 from "./components/AboutBody1";
import Navbar from "../../Reusable/Navbar/Navbar";
import Footer from "../../Reusable/Footer/Footer";

export default function About() {
  return <>
           <Navbar/>
           <AboutHero/>
           <AboutBody1/>
           <AboutBody2/>
           <Footer/>
    </>;
}
