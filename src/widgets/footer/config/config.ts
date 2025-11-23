import twitter from "@/shared/assets/images/icons/footer/twitter.svg";
import facebook from "@/shared/assets/images/icons/footer/facebook.svg";
import twitch from "@/shared/assets/images/icons/footer/twitch.svg";
import youtube from "@/shared/assets/images/icons/footer/youtube.svg";
import instagram from "@/shared/assets/images/icons/footer/instagram.svg";
import mail from "@/shared/assets/images/icons/footer/mail.svg";
import phone from "@/shared/assets/images/icons/footer/phone.svg";
import apple from "@/shared/assets/images/icons/footer/apple.svg";
import google from "@/shared/assets/images/icons/footer/google-play.svg";

export const SOCIALS = [
  { id: 1, img: twitter },
  { id: 2, img: facebook },
  { id: 3, img: twitch },
  { id: 4, img: youtube },
  { id: 5, img: instagram },
];

export const CONTACTS = [
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

export const FOOTER_MENU = [
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

export const APP_BUTTON = [
  { id: 1, img: apple, title: "App Store", subtitle: "Download on the" },
  { id: 2, img: google, title: "Google Play", subtitle: "Get it on" },
];
