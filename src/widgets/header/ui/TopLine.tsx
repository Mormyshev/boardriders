import locationIcon from "@/shared/assets/images/icons/location.svg";
import s from "./Header.module.scss";
import delivery from "@/shared/assets/images/icons/delivery.svg";
import payment from "@/shared/assets/images/icons/payment.svg";
import refund from "@/shared/assets/images/icons/refund.svg";
import V from "@/shared/assets/images/icons/V.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const TopLine = () => {
  const [dropdown, setDropdown] = useState(true);
  const [city, setCity] = useState("Москва");
  const cities = [
    { id: 1, text: "Воронеж" },
    { id: 2, text: "Казань" },
    { id: 3, text: "Иркутск" },
    { id: 4, text: "Владивосток" },
  ];
  const infoBuyersButtons = [
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
  const infoShopButtons = [
    { id: 1, link: "/", text: "Магазины" },
    { id: 2, link: "/", text: "Помощь" },
    { id: 3, link: "/", text: "Блоги" },
  ];
  return (
    <div className={s.topLineContainer}>
      <div className={s.topLine}>
        <div className={s.leftBlock}>
          <div className={s.location}>
            <img className={s.icon} src={locationIcon} alt="Иконка локации" />
            <span className={s.text}>Ваш регион доставки: </span>
            <span className={s.city}>
              <button
                className={s.selectorBtn}
                onClick={() => setDropdown((dropdown) => !dropdown)}
              >
                {city}
                <img src={V} />
              </button>
            </span>
            {dropdown && (
              <div className={s.dropdown}>
                <ul>
                  {cities.map((city) => (
                    <li key={city.id}>
                      <button
                        onClick={() => {
                          setCity(city.text);
                          setDropdown(false);
                        }}
                      >
                        {city.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className={s.aboutBlockBtn}>
            {infoShopButtons &&
              infoShopButtons.map((button) => (
                <NavLink key={button.id} to={button.link} className={s.link}>
                  {button.text}
                </NavLink>
              ))}
          </div>
        </div>
        <div className={s.rightBlock}>
          {infoBuyersButtons &&
            infoBuyersButtons.map((button) => (
              <NavLink key={button.id} to={button.link} className={s.link}>
                <img src={button.img} alt={button.alt} />
                <span>{button.text}</span>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};
