import styles from "./Header.module.scss";
import { useState } from "react";
import locationIcon from "@/shared/assets/images/icons/location.svg";
import V from "@/shared/assets/images/icons/V.svg";

export const Location = () => {
  const [dropdown, setDropdown] = useState(false);
  const [city, setCity] = useState("Москва");
  const cities = [
    { id: 1, text: "Воронеж" },
    { id: 2, text: "Казань" },
    { id: 3, text: "Иркутск" },
    { id: 4, text: "Владивосток" },
  ];

  return (
    <div className={styles.location}>
      <img className={styles.icon} src={locationIcon} alt="Иконка локации" />
      <span className={styles.text}>Ваш регион доставки: </span>
      <span className={styles.city}>
        <button
          className={styles.selectorBtn}
          onClick={() => setDropdown((dropdown) => !dropdown)}
        >
          {city}
          <img src={V} />
        </button>
      </span>
      {dropdown && (
        <div className={styles.dropdown}>
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
  );
};
