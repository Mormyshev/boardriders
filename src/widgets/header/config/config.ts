import account from "@/shared/assets/images/icons/account.svg";
import favourites from "@/shared/assets/images/icons/favourites.svg";
import cart from "@/shared/assets/images/icons/cart.svg";
import search from "@/shared/assets/images/icons/search.svg";
import delivery from "@/shared/assets/images/icons/delivery.svg";
import payment from "@/shared/assets/images/icons/payment.svg";
import refund from "@/shared/assets/images/icons/refund.svg";

export const TARGET_GROUPS = [
  { id: 1, link: "/", text: "Мужчинам" },
  { id: 2, link: "/", text: "Женщинам" },
  { id: 3, link: "/", text: "Детям" },
];

export const ACCOUNT_BUTTONS = [
  { id: 1, link: "/", img: account, alt: "Иконка входа", text: "Войти" },
  {
    id: 2,
    link: "/",
    img: favourites,
    alt: "Иконка избранное",
    text: "Избранное",
  },
  { id: 3, link: "/", img: cart, alt: "Иконка корзины", text: "Корзина" },
  { id: 4, link: "/", img: search, alt: "Иконка поиска", text: "Поиск" },
];

export const INFO_BUYERS_BUTTON = [
  {
    id: 1,
    link: "/",
    img: delivery,
    text: "Бесплатная доставка *",
    alt: "Иконка доставки",
  },
  {
    id: 2,
    link: "/",
    img: payment,
    text: "Оплата при получении",
    alt: "Иконка оплаты",
  },
  {
    id: 3,
    link: "/",
    img: refund,
    text: "Возврат в течение 14 дней",
    alt: "Иконка возврата",
  },
];

export const INFO_SHOP_BUTTONS = [
  { id: 1, link: "/", text: "Магазины" },
  { id: 2, link: "/", text: "Помощь" },
  { id: 3, link: "/", text: "Блоги" },
];

export const LINKS = [
  { id: 1, link: "/new", text: "Новинки" },
  { id: 2, link: "/snowboard", text: "Сноуборд" },
  { id: 3, link: "/ski", text: "Лыжи" },
  { id: 4, link: "/skateboard", text: "Скейт" },
  { id: 5, link: "/longboard", text: "Лонгборд" },
  { id: 6, link: "/wakeboard", text: "Вейкборд" },
  { id: 7, link: "/surf", text: "Серф" },
  { id: 8, link: "/sup", text: "Sup" },
  { id: 9, link: "/clothes", text: "Одежда" },
  { id: 10, link: "/footwear", text: "Обувь" },
  { id: 11, link: "/accessories", text: "Аксессуары" },
  { id: 12, link: "/brands", text: "Бренды" },
  { id: 13, link: "/sale", text: "Распродажа" },
];
