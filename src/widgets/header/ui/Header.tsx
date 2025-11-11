import locationIcon from "@/shared/assets/images/icons/location.svg";
import s from "./Header.module.scss";
import delivery from "@/shared/assets/images/icons/delivery.svg";
import payment from "@/shared/assets/images/icons/payment.svg";
import refund from "@/shared/assets/images/icons/refund.svg";
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
      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
