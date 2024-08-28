import Footer from "../../Reusable/Footer/Footer";
import styles from "./contact.module.scss"
// import mappin from "../../assets/images/mappin.svg"
// import envelope from "../../assets/images/envelope.svg"
// import phone from "../../assets/images/phone.svg"
// import instagram_icon from "../../assets/images/insta.svg"
// import f_icon from "../../assets/images/facebook.svg"
// import x_icon from "../../assets/images/x.svg"
// import Navbar from "../../Reusable/Navbar/Navbar";

const Contact = () => {
  return (
    <> 
      {/* <Navbar /> */}
      <div className={styles.contact_hero}>
        <div className={styles.contact_head}>
          <div className={styles.contact_row1}>
            <p>Contact Us</p>
            <p>For inquiries or more information, please reach out to us through our email, contact address or simply give us a call. We are here to assist with all your poultry needs.</p>
            <span>
              <img
                // src={mappin}
                alt="map pin"
                // className={styles.footer_logo}
              />

            <p>Abule Agerige village, Odeda, Abeokuta,Ogun State.</p>
            </span>

            <span>
              <img
                // src={envelope}
                alt="envelope"
                // className={styles.footer_logo}
              />
            <p>admin@agribaseconsult.farm</p>
            </span>

            <span>
              <img
                // src={phone}
                alt="phone"
                // className={styles.footer_logo}
              />
            <p>+23480130506443</p>
            </span>

            <div className={styles.social_icons}>
          <img
          // src={instagram_icon}
          alt="instagram-icon"
          />

          <img
          // src={f_icon}
          alt="facebook-icon"
          />

          <img
          // src={x_icon}
          alt="X-icon"
          />
          </div>
          </div>
          <div className={styles.contact_row2}>
            GET IN TOUCH
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;