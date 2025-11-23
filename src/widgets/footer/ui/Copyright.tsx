import styles from "./Footer.module.scss";
import { SOCIALS } from "../config/config";

export const Copyright = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        {SOCIALS.map((social) => (
          <button key={social.id}>
            <img src={social.img} alt="" />
          </button>
        ))}
      </div>
      <div className={styles.copirating}>
        <span>© 2020 Brd.ru. Все права защищены</span>
      </div>
    </div>
  );
};
