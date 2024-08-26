import styles from "./styles/productHero.module.scss"

export default function ProductHero (){
    return (
        <>
            <div className={styles.Hero}>
                <p>Fresh Eggs for  you everday</p>
                <p>Discover our premium poultry products, raised with care to ensure the highest quality and freshness for your kitchen.</p>
            </div>
        </>
    )
}