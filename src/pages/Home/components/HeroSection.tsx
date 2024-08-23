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
        <button>Get Started</button>
      </div>
    </>
  );
};

export default HeroSection;
