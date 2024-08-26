import styles from "./styles/productBody1.module.scss"
import egg from "../../../assets/images/egg.png"
import Sub from "./Sub"
import check from "../../../assets/images/check.svg"

export default function ProductBody1(){
    return (
        <>
        <div className={styles.productBody}>
            <span>our main products</span>
            <span>fresh eggs</span>
            <div className={styles.productSecond}>
                <div className={styles.productSecond1}>
                    <img src={egg} alt="eggs in basket" />
                </div>
                <div className={styles.productSecond2}>
                    <Sub image={check}
                    alt="check"
                    text="100% Quality" />
                    <Sub image={check}
                    alt="check"
                    text="Fresh Eggs with no additives" />
                     <Sub image={check}
                    alt="check"
                    text="Healthy Chickens" />
                     <Sub image={check}
                    alt="check"
                    text="Hygienic Coop" />
                     <Sub image={check}
                    alt="check"
                    text="Orders from 10 crates" />
                    <p>From N4,500</p>
                    <button>buy now</button>
                </div>
            </div>
        </div>
        </>
    )
}