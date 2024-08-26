import React from "react";
import styles from "../home.module.scss";

interface Cards {
  image: string;
  headerText: string;
  text: string;
  alt: string;
}

const Cards: React.FC<Cards> = ({ image, headerText, text, alt }) => {
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
