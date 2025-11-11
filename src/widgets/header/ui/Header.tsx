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
import V from "@/shared/assets/images/icons/V.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [dropdown, setDropdown] = useState(true);
  const [city, setCity] = useState("Москва");
  const onOfDropdown = (dropdown: boolean) => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };
  return (
    <header className={s.container}>
      <div className={s.topLineContainer}>
        <div className={s.topLine}>
          <div className={s.leftBlock}>
            <div className={s.location}>
              <img className={s.icon} src={locationIcon} alt="" />
              <span className={s.text}>Ваш регион доставки: </span>
              <span>
                <button
                  className={s.selectorBtn}
                  onClick={() => onOfDropdown(dropdown)}
                >
                  {city}
                  <img src={V} />
                </button>
              </span>
              {dropdown && (
                <div className={s.dropdown}>
                  <ul>
                    <li>
                      <button
                        onClick={() => {
                          setCity("Воронеж");
                          setDropdown(false);
                        }}
                      >
                        Воронеж
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setCity("Казань");
                          setDropdown(false);
                        }}
                      >
                        Казань
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setCity("Иркутск");
                          setDropdown(false);
                        }}
                      >
                        Иркутск
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setCity("Владивосток");
                          setDropdown(false);
                        }}
                      >
                        Владивосток
                      </button>
                    </li>
                  </ul>
                </div>
              )}
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
            <NavLink to="/new">Новинки</NavLink>
          </li>
          <li>
            <NavLink to="/snowboard">Сноуборд</NavLink>
          </li>
          <li>
            <NavLink to="/ski">Лыжи</NavLink>
          </li>
          <li>
            <NavLink to="/skateboard">Скейт</NavLink>
          </li>
          <li>
            <NavLink to="/longboard">Лонгборд</NavLink>
          </li>
          <li>
            <NavLink to="/wakeboard">Вейкборд</NavLink>
          </li>
          <li>
            <NavLink to="/surf">Серф</NavLink>
          </li>
          <li>
            <NavLink to="/sup">Sup</NavLink>
          </li>
          <li>
            <NavLink to="/clothes">Одежда</NavLink>
          </li>
          <li>
            <NavLink to="/footwear">Обувь</NavLink>
          </li>
          <li>
            <NavLink to="/accessories">Аксессуары</NavLink>
          </li>
          <li>
            <NavLink to="/brands">Бренды</NavLink>
          </li>
          <li>
            <NavLink to="/sale">Распродажа</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
