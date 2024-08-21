import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <span>Logo</span>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
