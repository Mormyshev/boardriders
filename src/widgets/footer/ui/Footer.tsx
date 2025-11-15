import s from "./Footer.module.scss";
import logoText from "@/shared/assets/images/icons/footer/logo-footer.svg";
import logoImg from "@/shared/assets/images/icons/footer/logo-img.svg";
import mailForm from "@/shared/assets/images/icons/footer/mail-form.svg";
import send from "@/shared/assets/images/icons/footer/send.svg";
import twitter from "@/shared/assets/images/icons/footer/twitter.svg";
import facebook from "@/shared/assets/images/icons/footer/facebook.svg";
import twitch from "@/shared/assets/images/icons/footer/twitch.svg";
import youtube from "@/shared/assets/images/icons/footer/youtube.svg";
import instagram from "@/shared/assets/images/icons/footer/instagram.svg";
import apple from "@/shared/assets/images/icons/footer/apple.svg";
import google from "@/shared/assets/images/icons/footer/google-play.svg";
import qr from "@/shared/assets/images/icons/footer/qr.svg";
import mail from "@/shared/assets/images/icons/footer/mail.svg";
import phone from "@/shared/assets/images/icons/footer/phone.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const socials = [
    { id: 1, img: twitter },
    { id: 2, img: facebook },
    { id: 3, img: twitch },
    { id: 4, img: youtube },
    { id: 5, img: instagram },
  ];
  const contacts = [
    {
      id: 1,
      img: phone,
      title: "8 (800) 511-74-68",
      subtitle: "Бесплатная горячая линия \n Ежедневно с 9 до 21",
    },
    {
      id: 2,
      img: mail,
      title: "Контактный Email",
      subtitle: "info@brd.ru",
    },
  ];
  const footerMenu = [
    {
      id: 1,
      title: "Помощь",
      links: [
        { id: 1, link: "/", text: "Доставка" },
        { id: 2, link: "/", text: "Оплата" },
        { id: 3, link: "/", text: "Возврат" },
        { id: 4, link: "/", text: "Отзывы (2290)" },
        { id: 5, link: "/", text: "Акции и скидки" },
      ],
    },
    {
      id: 2,
      title: "Компания",
      links: [
        { id: 1, link: "/", text: "Контакты" },
        { id: 2, link: "/", text: "О boardriders" },
        { id: 3, link: "/", text: "Вакансии" },
        { id: 4, link: "/", text: "Публичная оферта" },
      ],
    },
    {
      id: 3,
      title: "Boardriders Inc.",
      links: [
        { id: 1, link: "/", text: "Франчайзинг" },
        { id: 2, link: "/", text: "Quiksilver" },
        { id: 3, link: "/", text: "Roxy" },
        { id: 4, link: "/", text: "DC Shoes" },
        { id: 5, link: "/", text: "Boardriders Club" },
      ],
    },
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.logo}>
            <img src={logoImg} alt="логотип" />
            <img src={logoText} alt="логотип" />
          </div>
          <div className={s.mailingContainer}>
            <button className={s.mailing}>
              <div className={s.leftItem}>
                <img src={mailForm} alt="email" />
                <span>
                  Подпишись на рассылку и получи{" "}
                  <span className={s.sale}>-10%</span> скидку
                </span>
              </div>
              <img src={send} alt="send" className={s.rightSend} />
            </button>
          </div>
        </div>
        <div className={s.main}>
          <div className={s.app}>
            <h2 className={s.title}>Доступ к ранним релизам в приложении</h2>
            <div className={s.download}>
              <div className={s.links}>
                <button className={s.apple}>
                  <img src={apple} alt="apple-logo" />
                  <div className={s.textGroupe}>
                    <span>Download on the</span>
                    <span>App Store</span>
                  </div>
                </button>
                <button className={s.google}>
                  <img src={google} alt="google-logo" />
                  <div className={s.textGroupe}>
                    <span>Get it on</span>
                    <span>Google Play</span>
                  </div>
                </button>
              </div>
              <div className={s.qr}>
                <img src={qr} alt="qr" />
              </div>
            </div>
          </div>
          <div className={s.contacts}>
            <h2 className={s.title}>Контакты</h2>
            {contacts &&
              contacts.map((contact) => (
                <div className={s.textWrapper}>
                  <img src={contact.img} alt="иконка" />
                  <div className={s.text}>
                    <h3>{contact.title}</h3>
                    <h4>{contact.subtitle}</h4>
                  </div>
                </div>
              ))}
          </div>
          <nav className={s.menu}>
            {footerMenu &&
              footerMenu.map((item) => (
                <div className={s.menuContainer}>
                  <h2 className={s.title}>{item.title}</h2>
                  <ul className={s.list}>
                    {item.links &&
                      item.links.map((link) => (
                        <li className={s.item}>
                          <NavLink className={s.text} to={link.link}>
                            {link.text}
                          </NavLink>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </nav>
        </div>
        <div className={s.footer}>
          <div className={s.social}>
            {socials &&
              socials.map((social) => (
                <button key={social.id}>
                  <img src={social.img} alt="" />
                </button>
              ))}
          </div>
          <div className={s.copirating}>
            <span>© 2020 Brd.ru. Все права защищены</span>
          </div>
        </div>
      </div>
    </div>
  );
};
