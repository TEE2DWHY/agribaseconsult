import Footer from "../../Reusable/Footer/Footer";
import styles from "./contact.module.scss"
import Navbar from "../../Reusable/Navbar/Navbar";
import Subscribe from "../../Reusable/Subscribe/Subscribe";
import ContactBody from "./Components/ContactBody";
import ContactHero from "./Components/ContactHero";


const Contact = () => {
  return (
    <> 
      <Navbar />
      <ContactHero/>
      <ContactBody/>
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Contact;