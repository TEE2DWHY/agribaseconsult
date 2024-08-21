import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <span>Logo</span>
        <ul>
          <li>About</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
