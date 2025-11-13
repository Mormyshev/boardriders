import s from "./Header.module.scss";
import logo from "@/shared/assets/images/logo.svg";
import account from "@/shared/assets/images/icons/account.svg";
import favourites from "@/shared/assets/images/icons/favourites.svg";
import cart from "@/shared/assets/images/icons/cart.svg";
import search from "@/shared/assets/images/icons/search.svg";
import { NavLink } from "react-router-dom";

export const MiddleLine = () => {
  const targetGroups = [
    { id: 1, link: "/", text: "Мужчинам" },
    { id: 2, link: "/", text: "Женщинам" },
    { id: 3, link: "/", text: "Детям" },
  ];
  const accountButtons = [
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
  return (
    <div className={s.middleLine}>
      <div className={s.leftBtnBlock}>
        {targetGroups &&
          targetGroups.map((group) => (
            <NavLink key={group.id} to={group.link} className={s.link}>
              <span>{group.text}</span>
            </NavLink>
          ))}
      </div>
      <img src={logo} alt="logo" />
      <div className={s.rightBtnBlock}>
        {accountButtons &&
          accountButtons.map((button) => (
            <NavLink key={button.id} to={button.link} className={s.item}>
              <img src={button.img} alt={button.alt} />
              <span>{button.text}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};
