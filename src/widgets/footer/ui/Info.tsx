import { Contacts } from "./Contacts";
import styles from "./Footer.module.scss";
import { Menu } from "./Menu";

export const Info = () => {
  return (
    <div className={styles.main}>
      <Contacts />
      <Menu />
    </div>
  );
};
