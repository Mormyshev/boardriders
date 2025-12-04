import styles from "./Header.module.scss";
import { Location } from "./Location";
import { NavLink } from "react-router-dom";
import { INFO_SHOP_BUTTONS, INFO_BUYERS_BUTTON } from "../config/config";

export const TopLine = () => {
  return (
    <div className={styles.topLineContainer}>
      <div className={styles.topLine}>
        <div className={styles.leftBlock}>
          <Location />
          <div className={styles.aboutBlockBtn}>
            {INFO_SHOP_BUTTONS.map((button) => (
              <NavLink key={button.id} to={button.link} className={styles.link}>
                {button.text}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={styles.rightBlock}>
          {INFO_BUYERS_BUTTON.map((button) => (
            <NavLink key={button.id} to={button.link} className={styles.link}>
              <img src={button.img} alt={button.alt} />
              <span>{button.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
