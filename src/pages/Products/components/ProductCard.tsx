import styles from "./styles/productCard.module.scss"
import star1 from "../../../assets/images/star1.svg";
import star2 from "../../../assets/images/star2.svg";

export default function ProductCard (){
    return(
        <>
        <div className={styles.cardArea}>
            <div className={styles.card}>
                <img src={star1} alt="shine" />
                <img src={star2} alt="shine" />
                <p>We supply supermarkets, bakeries, restaurants and every other outlets</p>
                <a href="/contact">
                <button>Contact Us</button>
                </a>
            </div>
        </div>
        </>
    )
}