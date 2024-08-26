import styles from "../about.module.scss";
import egg from "../../../assets/images/egg2d.svg";

export default function AboutBody1() {
  return (
    <>
      <div className={styles.secondPart}>
        <div className={styles.secondPart1}>
          <div className={styles.secondPart01}>
            <img src={egg} alt="egg" className={styles.egg2d} />
          </div>
          <div className={styles.secondPart02}>
            <p className={styles.wordsPart1}>We Provide Quality</p>
            <p className={styles.wordsPart2}>
              At our poultry farm, we are dedicated to raising high-quality,
              healthy chickens in a sustainable and humane environment, where
              each bird is nurtured with care, fed a natural diet, and kept in
              spacious, clean coops, ensuring that every product we deliver,
              from fresh eggs to premium cuts, meets the highest standards of
              safety, taste, and nutrition for your family’s table.
            </p>
            <button className={styles.secondPartButton}>
              See Our Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
