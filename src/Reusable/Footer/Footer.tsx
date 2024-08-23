import styles from "./footer.module.scss"
import copyright from "../../assets/images/Copyright.svg"
const Footer = () => {
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
          <div className={styles.footer_space}>
            {/* space */}
          </div>
          <div className={styles.footer_row2}>
            Company
          </div>
          <div className={styles.footer_space}>
            {/* space */}
          </div>
          <div className={styles.footer_row3}>
            Get in touch
          </div>
          <div className={styles.footer_space}>
            {/* space */}
          </div>
          <div className={styles.footer_row4}>
            Socials
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