import styles from "./Footer.module.scss";
import { SOCIALS } from "../config/config";

export const Copyright = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        {SOCIALS.map((social) => (
          <a href={social.link} key={social.id}>
            <img src={social.img} alt="" />
          </a>
        ))}
      </div>
      <div className={styles.copirating}>
        <span>© 2020 Brd.ru. Все права защищены</span>
      </div>
    </div>
  );
};
