import styles from '../home.module.scss';
import cock from '../../../assets/images/cock.png';
import check from '../../../assets/images/check.svg';
import eggDesign from '../../../assets/images/egg-design.png';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <>
      <div className={styles.offer}>
        <div className={styles.left}>
          <h1>We offer natural & healthy poultry.</h1>
          <p>
            We offer natural and healthy poultry, raised without antibiotics or
            hormones, ensuring you receive the freshest, most nutritious
            products for your table.
          </p>
          <ul>
            <li>
              <img src={check} alt="check-img" className={styles.check} />
              We uphold high standards of animal welfare, ensuring humane and
              sustainable farming methods.
            </li>
            <li>
              <img src={check} alt="check-img" className={styles.check} />
              We prioritize your health by providing poultry that’s free from
              hormones and antibiotics.
            </li>
            <li>
              <img src={check} alt="check-img" className={styles.check} />
              Our poultry is raised in natural, spacious environments to ensure
              premium taste and texture.
            </li>
            <li>
              <img src={check} alt="check-img" className={styles.check} />
              Our hygienic coops and processing practices ensure your poultry is
              safe and clean.
            </li>
            <li>
              <img src={check} alt="check-img" className={styles.check} />
              we are dedicated to providing outstanding service, making sure you
              enjoy a hassle-free experience every time.
            </li>
          </ul>
          <Link to={'/product'}>
            <button>See Our Products</button>
          </Link>
        </div>
        <div className={styles.right}>
          <img src={cock} alt="cock-img" />
        </div>
      </div>
      <div className={styles.raisedChickens}>
        <div className={styles.left}>
          <img src={eggDesign} alt="egg-design" />
        </div>
        <div className={styles.right}>
          <h1>Enjoy fresh eggs from pasture raised Chicken.</h1>
          <p>
            Enjoy the rich, natural flavour of fresh eggs from our
            pasture-raised chickens, nurtured in open fields for healthier, more
            nutritious eggs straight from our farm to your table.
          </p>
          <Link to={'/product'}>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Offer;
