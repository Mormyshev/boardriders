import locationIcon from "@/shared/assets/images/icons/location.svg";
import s from "./Header.module.scss";
import delivery from "@/shared/assets/images/icons/delivery.svg";
import payment from "@/shared/assets/images/icons/payment.svg";
import refund from "@/shared/assets/images/icons/refund.svg";
import logo from "@/shared/assets/images/logo.svg";
import account from "@/shared/assets/images/icons/account.svg";
import favourites from "@/shared/assets/images/icons/favourites.svg";
import cart from "@/shared/assets/images/icons/cart.svg";
import search from "@/shared/assets/images/icons/search.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.topLineContainer}>
        <div className={s.topLine}>
          <div className={s.leftBlock}>
            <div className={s.location}>
              <img className={s.icon} src={locationIcon} alt="" />
              <span className={s.text}>Ваш регион доставки: </span>
              <span>Москва</span>
            </div>
            <div className={s.aboutBlockBtn}>
              <a href="#" className={s.link}>
                Магазины
              </a>
              <a href="#" className={s.link}>
                Помощь
              </a>
              <a href="#" className={s.link}>
                Блоги
              </a>
            </div>
          </div>
          <div className={s.rightBlock}>
            <a href="#" className={s.link}>
              <img src={delivery} alt="" />
              <span>Бесплатная доставка *</span>
            </a>
            <a href="#" className={s.link}>
              <img src={payment} alt="" />
              <span>Оплата при получении</span>
            </a>
            <a href="#" className={s.link}>
              <img src={refund} alt="" />
              <span>Возврат в течение 14 дней</span>
            </a>
          </div>
        </div>
      </div>
      <div className={s.middleLine}>
        <div className={s.leftBtnBlock}>
          <a href="#" className={s.link}>
            <span>Мужчинам</span>
          </a>
          <a href="#" className={s.link}>
            <span>Женщинам</span>
          </a>
          <a href="#" className={s.link}>
            <span>Детям</span>
          </a>
        </div>
        <img src={logo} alt="logo" />
        <div className={s.rightBtnBlock}>
          <div className={s.item}>
            <img src={account} alt="account" />
            <span>Войти</span>
          </div>
          <div className={s.item}>
            <img src={favourites} alt="favourites" />
            <span>Избранное</span>
          </div>
          <div className={s.item}>
            <img src={cart} alt="cart" />
            <span>Корзина</span>
          </div>
          <div className={s.item}>
            <img src={search} alt="search" />
            <span>Поиск</span>
          </div>
        </div>
      </div>
      <nav className={s.menu}>
        <ul>
          <li>
            <a href="#">Новинки</a>
          </li>
          <li>
            <a href="#">Сноуборд</a>
          </li>
          <li>
            <a href="#">Лыжи</a>
          </li>
          <li>
            <a href="#">Скейт</a>
          </li>
          <li>
            <a href="#">Лонгборд</a>
          </li>
          <li>
            <a href="#">Вейкборд</a>
          </li>
          <li>
            <a href="#">Серф</a>
          </li>
          <li>
            <a href="#">Sup</a>
          </li>
          <li>
            <a href="#">Одежда</a>
          </li>
          <li>
            <a href="#">Обувь</a>
          </li>
          <li>
            <a href="#">Аксессуары</a>
          </li>
          <li>
            <a href="#">Бренды</a>
          </li>
          <li>
            <a href="#">Распродажа</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
