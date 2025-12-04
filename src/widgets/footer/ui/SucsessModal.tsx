import type React from "react";
import styles from "./Footer.module.scss";

interface FormProps {
  handleButtonClick: () => void;
}

export const SucsessModal: React.FC<FormProps> = ({ handleButtonClick }) => {
  return (
    <div className={styles.formWrapper}>
      <button className={styles.closeButton} onClick={handleButtonClick}>
        ✖
      </button>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>✓</span>
      </div>
      <span className={styles.text}>Подписка оформлена</span>
    </div>
  );
};
