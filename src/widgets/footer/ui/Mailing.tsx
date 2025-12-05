import styles from "./Footer.module.scss";
import logoText from "@/shared/assets/images/icons/footer/logo-footer.svg";
import logoImg from "@/shared/assets/images/icons/footer/logo-img.svg";
import mailForm from "@/shared/assets/images/icons/footer/mail-form.svg";
import send from "@/shared/assets/images/icons/footer/send.svg";
import { useState } from "react";
import { Form } from "./Form";

export const Mailing = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Иконка логотипа" />
        <img src={logoText} alt="Текст логотипа" />
      </div>
      <div className={styles.mailingContainer}>
        <button className={styles.mailing} onClick={handleButtonClick}>
          <div className={styles.leftItem}>
            <img src={mailForm} alt="email" />
            <span>
              Подпишись на рассылку и получи{" "}
              <span className={styles.sale}>-10%</span> скидку
            </span>
          </div>
          <img src={send} alt="send" className={styles.rightSend} />
        </button>
        {showForm && <Form handleButtonClick={handleButtonClick} />}
      </div>
    </div>
  );
};
