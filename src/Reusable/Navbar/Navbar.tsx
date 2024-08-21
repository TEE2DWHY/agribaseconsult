import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/product", label: "Product" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className={styles.navbar}>
      <span>
        <img
          src="https://res.cloudinary.com/dg7zsjimc/image/upload/v1724250698/Agribase_Consult_Icon_iaeqdm.svg"
          alt="logo"
          className={styles.logo}
        />
        Agribase Consult
      </span>
      <ul>
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
    </nav>
  );
};

export default Navbar;
