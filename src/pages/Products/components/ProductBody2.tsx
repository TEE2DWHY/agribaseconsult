import styles from "./styles/productBody2.module.scss"
import woman from "../../../assets/images/womanchicken.svg"
import call from "../../../assets/images/productphone.svg"

export default function ProductBody2 () {
    return (
        <>
            <div className={styles.secondPart}>
                <div className={styles.secondPart1}>
                    <div className={styles.secondPart01}>
                        <p className={styles.productWord}>How can i place order?</p>
                        <p className={styles.productWord2}>
                        Simply click on <span className={styles.productWord3}>BUY NOW</span> to order or you can reach us via our telephone number . You can also reach out to us from the  contact page and send us a message. We assure you of swift delivery not later than <span className={styles.productWord3}>48 hours</span> from when order was placed
                        </p>
                        <button className={styles.secondPartButton}>Order Now</button>
                        <p className={styles.productOR}>Or</p>
                        <div className={styles.productCall}>
                            <img src={call} alt="phone" className={styles.call} />
                            <span className={styles.pCall}>+2348130506443</span>
                        </div>
                    </div>
                    <div className={styles.secondPart02}>
                        <img src={woman} alt="woman and chicken" className={styles.productImage} />
                    </div>
                </div>
            </div>
        </>
    )
}