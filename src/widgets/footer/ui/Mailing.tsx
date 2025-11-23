import styles from "./Footer.module.scss";
import logoText from "@/shared/assets/images/icons/footer/logo-footer.svg";
import logoImg from "@/shared/assets/images/icons/footer/logo-img.svg";
import mailForm from "@/shared/assets/images/icons/footer/mail-form.svg";
import send from "@/shared/assets/images/icons/footer/send.svg";

export const Mailing = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="логотип" />
        <img src={logoText} alt="логотип" />
      </div>
      <div className={styles.mailingContainer}>
        <button className={styles.mailing}>
          <div className={styles.leftItem}>
            <img src={mailForm} alt="email" />
            <span>
              Подпишись на рассылку и получи{" "}
              <span className={styles.sale}>-10%</span> скидку
            </span>
          </div>
          <img src={send} alt="send" className={styles.rightSend} />
        </button>
      </div>
    </div>
  );
};
