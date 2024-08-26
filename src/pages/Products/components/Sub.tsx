import React from "react";
import styles from "./styles/productBody1.module.scss"
interface Sub {
    image: string;
    text: string;
    alt: string;
  }

  const Sub: React.FC<Sub> = ({ image, text, alt }) => {
    return (
      <>
        <div className={styles.sub}>
          <img src={image} alt={alt} />
          <p>{text}</p>
        </div>
      </>
    );
  };
  
  export default Sub;
  