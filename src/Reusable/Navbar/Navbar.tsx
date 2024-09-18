import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/product", label: "Product" },
    { path: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <span>
          <img
            src="https://res.cloudinary.com/dg7zsjimc/image/upload/v1724250698/Agribase_Consult_Icon_iaeqdm.svg"
            alt="logo"
            className={styles.logo}
          />
          Agribase Consult
        </span>
      </Link>

      <ul className={`${menuOpen ? styles.open : ""}`}>
        {routes.map((route) => (
          <li
            key={route.path}
            className={`${activeRoute === route.path ? styles.active : ""}`}
          >
            <Link to={route.path} onClick={() => setActiveRoute(route.path)}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>

      <span className={styles.toggle} onClick={toggleMenu}>
        {menuOpen ? (
          <IoCloseOutline size={40} />
        ) : (
          <IoReorderThreeOutline size={40} />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
