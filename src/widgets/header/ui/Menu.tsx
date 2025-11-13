import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
export const Menu = () => {
  const links = [
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
  return (
    <nav className={s.menu}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.link}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
