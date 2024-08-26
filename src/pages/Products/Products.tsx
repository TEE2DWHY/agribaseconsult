import Navbar from "../../Reusable/Navbar/Navbar";
import Footer from "../../Reusable/Footer/Footer";
import ProductBody2 from "./components/ProductBody2"
import ProductHero from "./components/ProductHero";
import ProductCard from "./components/ProductCard";
import ProductBody1 from "./components/ProductBody1";
// import styles from "./products.module.scss"


const Products = () => {
  return <>
  <Navbar />
  <ProductHero />
  <ProductBody1 />
  <ProductBody2 />
  <ProductCard />
  <Footer />
  </>;
};

export default Products;
