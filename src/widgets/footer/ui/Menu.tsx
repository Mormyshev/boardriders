import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { FOOTER_MENU } from "../config/config";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      {FOOTER_MENU.map((item) => (
        <div className={styles.menuContainer}>
          <h2 className={styles.title}>{item.title}</h2>
          <ul className={styles.list}>
            {item.links &&
              item.links.map((link) => (
                <li className={styles.item}>
                  <NavLink className={styles.text} to={link.link}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
