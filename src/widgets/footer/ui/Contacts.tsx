import styles from "./Footer.module.scss";
import qr from "@/shared/assets/images/icons/footer/qr.svg";
import { CONTACTS, APP_BUTTON } from "../config/config";

export const Contacts = () => {
  return (
    <>
      <div className={styles.app}>
        <h2 className={styles.title}>Доступ к ранним релизам в приложении</h2>
        <div className={styles.download}>
          <div className={styles.links}>
            {APP_BUTTON.map((button) => (
              <a href={button.link} key={button.id} className={styles.apple}>
                <img src={button.img} alt="logo-app" />
                <div className={styles.textGroupe}>
                  <span>{button.subtitle}</span>
                  <span>{button.title}</span>
                </div>
              </a>
            ))}
          </div>
          <div className={styles.qr}>
            <img src={qr} alt="qr" />
          </div>
        </div>
      </div>
      <div className={styles.contacts}>
        <h2 className={styles.title}>Контакты</h2>
        {CONTACTS.map((contact) => (
          <div key={contact.id} className={styles.textWrapper}>
            <img src={contact.img} alt="иконка" />
            <div className={styles.text}>
              <h3>{contact.title}</h3>
              <h4>{contact.subtitle}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
