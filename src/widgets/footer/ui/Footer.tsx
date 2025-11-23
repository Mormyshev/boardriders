import styles from "./Footer.module.scss";
import { Mailing } from "./Mailing";
import { Info } from "./Info";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Mailing />
        <Info />
        <Copyright />
      </div>
    </div>
  );
};
