import { Link } from 'react-router-dom';
import styles from '../home.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      `.${styles.heroSection} h1`,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
    );
    gsap.fromTo(
      `.${styles.heroSection} p`,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 },
    );
    gsap.fromTo(
      `.${styles.heroSection} button`,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1 },
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '#healthy-living',
      {
        color: '#ffff',
      },
      {
        color: '#ffcc2a',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      },
    );
  }, []);
  return (
    <>
      <div className={styles.heroSection}>
        <h1>
          Get the Best in Fresh and Quality Poultry Products for <br />
          <span id="healthy-living">Healthy Living</span>
        </h1>
        <p>We offer the best of fresh poultry produce</p>
        <Link to={'/product'}>
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
