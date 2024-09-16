import { Link } from "react-router-dom";
import styles from "../home.module.scss";

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <h1>
          Get the Best in Fresh and Quality Poultry Products for <br />
          <span>Healthy Living</span>
        </h1>
        <p>We offer the best of fresh poultry produce</p>
        <Link to={"/product"}>
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
