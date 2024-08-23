import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.scss"
import copyright from "../../assets/images/Copyright.svg"
import instagram_icon from "../../assets/images/Instagram.svg"
import f_icon from "../../assets/images/f.svg"
import x_icon from "../../assets/images/x.svg"

const Footer = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/product", label: "Product" },
    { path: "/contact", label: "Contact Us" },
  ];
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styles.footer_head}>
        <div className={styles.footer_neck}>

          {/* div1 */}
          <div className={styles.footer_row1}>
            <section className={styles.rowx}>
          <img
          src="https://res.cloudinary.com/dg7zsjimc/image/upload/v1724250698/Agribase_Consult_Icon_iaeqdm.svg"
          alt="logo"
          className={styles.footer_logo}
        />

        <p className={styles.footer_p1}>Agribase Consult</p>
        </section>
        <p className={styles.footer_p2}>Our poultry is raised in natural, spacious environments to ensure premium taste and texture</p>
          </div>

          {/* ROW 2 */}
          <div className={styles.footer_row2}>
            <p>Company</p>
            <div className={styles.footer_ul}>
            <ul>
              {routes.map((route) => (
          <li
            key={route.path}
            // className={`${activeRoute === route.path ? styles.active : ""}`}
          >
            <Link to={route.path} onClick={() => setActiveRoute(route.path)}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
            </div>
          </div>
          <div className={styles.footer_row3}>
            <p>Get in touch</p>
            <p>Abule Agerige village, Odeda, Abeokuta,Ogun State.</p>
            <p>admin@agribaseconsult.farm</p>
            <p>+23480130506443</p>
          </div>

          {/* Footer Row 3 */}
          <div className={styles.footer_row4}>
            <p>Socials</p>
            <div className={styles.footer_social_icons}>
          <img
          src={instagram_icon}
          alt="instagram-icon"
          />

          <img
          src={f_icon}
          alt="facebook-icon"
          />

          <img
          src={x_icon}
          alt="X-icon"
          />
          </div>
          </div>

       
        
        </div>  
        <hr className={styles.footer_hr}/>

        {/* copyright footer */}
      <div>
       
        <div className={styles.footer_copyright}>
        <img
          src={copyright}
          alt="copyright"
          className={styles.logo}
        />
        <p className={styles.footer_pend}>{year}, Agribase. All right reserved</p>
        </div>
        </div>

      </div>
    </>
  );
};

export default Footer;