import styles from "./Header.module.scss";
import { TopLine } from "./TopLine";
import { MiddleLine } from "./MiddleLine";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className={styles.container}>
      <TopLine />
      <MiddleLine />
      <Menu />
    </header>
  );
};
