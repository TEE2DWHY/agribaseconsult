import Footer from "../../Reusable/Footer/Footer";
// import styles from "./contact.module.scss"
import Navbar from "../../Reusable/Navbar/Navbar";
import ContactBody from "./Components/ContactBody";
import ContactHero from "./Components/ContactHero";


const Contact = () => {
  return (
    <> 
      <Navbar />
      <ContactHero/>
      <ContactBody/>
      <Footer />
    </>
  );
};

export default Contact;