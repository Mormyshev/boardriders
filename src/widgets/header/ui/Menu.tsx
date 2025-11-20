import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { LINKS } from "../config/config";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        {LINKS.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
