import React from 'react';
import styles from '../home.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface Cards {
  image: string;
  headerText: string;
  text: string;
  alt: string;
}

const Cards: React.FC<Cards> = ({ image, headerText, text, alt }) => {
  useGSAP(() => {
    gsap.fromTo(
      `.${styles.card}`,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.card}`,
          start: 'top 80%',
        },
      },
    );
  }, []);

  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={alt} />
        <h2>{headerText}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Cards;
