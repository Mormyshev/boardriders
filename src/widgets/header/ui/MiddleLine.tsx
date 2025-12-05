import styles from "./Header.module.scss";
import logo from "@/shared/assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { TARGET_GROUPS } from "../config/config";
import { ACCOUNT_BUTTONS } from "../config/config";

export const MiddleLine = () => {
  return (
    <div className={styles.middleLine}>
      <div className={styles.leftBtnBlock}>
        {TARGET_GROUPS.map((group) => (
          <NavLink key={group.id} to={group.link} className={styles.link}>
            <span>{group.text}</span>
          </NavLink>
        ))}
      </div>
      <img src={logo} alt="logo" />
      <div className={styles.rightBtnBlock}>
        {ACCOUNT_BUTTONS.map((button) => (
          <NavLink key={button.id} to={button.link} className={styles.item}>
            <img src={button.img} alt={button.alt} />
            <span>{button.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
