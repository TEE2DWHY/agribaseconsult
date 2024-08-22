import styles from "./styles/abouthero.module.scss"
export default function AboutHero () 
{
    return (
        <>
        <div className={styles.firstHero}>
            <div className={styles.firstHero1}>
            <div className={styles.firstHero2}>
                <p className={styles.heroWords}>
                 About Us
                </p>
                <p className={styles.heroWords2}>
                    At our poultry farm, we are dedicated to providing top-quality, naturally raised poultry products, cultivated with care and respect for both the animals and the environment
                </p>
                <button className={styles.heroButton}>Get Started</button>
            </div>
            <div className={styles.firstHero3}></div>
            </div>
        </div>
        </>
    )
}