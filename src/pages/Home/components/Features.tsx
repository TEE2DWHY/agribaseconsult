import styles from '../home.module.scss';
import Cards from './Cards';
import chicken from '../../../assets/images/chicken.png';
import nest from '../../../assets/images/nest.png';
import chickenCoop from '../../../assets/images/chicken-coop.png';

const Features = () => {
  return (
    <>
      <div className={styles.features}>
        <h2>why choose us</h2>
        <p className={styles.subHeader}>
          we are committed to delivering the highest quality, farm-fresh
          products, ethically raised with care and expertise, ensuring you and
          your family enjoy nutritious, flavorful poultry that meets the highest
          standards of safety and sustainability, all backed by exceptional
          customer service and a passion for excellence.
        </p>
        <div className={styles.cards}>
          <Cards
            image={chicken}
            alt="chicken-img"
            headerText="Healthy Chicken"
            text="Our chickens are raised in a healthy, stress-free environment. We prioritize their well-being by providing a balanced diet and this commitment to quality ensures that all you buy from us is not only delicious but also a healthier choice for you and your family."
          />
          <Cards
            image={nest}
            alt="egg-img"
            headerText="Fresh Eggs"
            text="Our eggs are gathered fresh daily from healthy, free-range hens that are cared for with the utmost attention to their well-being. Packed with essential nutrients like protein, vitamins, and omega-3 fatty acids, our eggs are a natural source of wholesome goodness."
          />
          <Cards
            image={chickenCoop}
            alt="chicken-coop-img"
            headerText="Hygienic Coop"
            text="Our coops are designed with cleanliness and safety in mind, featuring proper ventilation, easy-to-clean surfaces, and ample space for your birds to thrive. By reducing the risk of disease and promoting a clean environment, our coops ensure that your poultry can grow in a healthy, stress-free setting."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
