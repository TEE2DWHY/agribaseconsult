import styles from "./styles/abouthero.module.scss";
import chick from "../../../assets/images/finechicken.svg";
import green from "../../../assets/images/greenchicken.svg";
import star1 from "../../../assets/images/star1.svg";
import star2 from "../../../assets/images/star2.svg";

export default function AboutHero() {
  return (
    <>
      <div className={styles.firstHero}>
        <div className={styles.firstHero1}>
          <div className={styles.firstHero2}>
            <p className={styles.heroWords}>About Us</p>
            <p className={styles.heroWords2}>
              At our poultry farm, we are dedicated to providing top-quality,
              naturally raised poultry products, cultivated with care and
              respect for both the animals and the environment
            </p>
            <button className={styles.heroButton}>Get Started</button>
          </div>
          <div className={styles.firstHero3}>
            <img
              src={green}
              alt="chicken"
              className={`${styles.backgroundImage} ${styles.animatedImage}`}
            />
            <img src={chick} alt="chicken" className={styles.foregroundImage} />
            <img src={star1} alt="chicken" className={styles.starOne} />
            <img
              src={star2}
              alt="chicken"
              className={`${styles.starTwo} ${styles.animatedStar}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
