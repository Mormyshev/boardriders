import type React from "react";
import styles from "./Footer.module.scss";
import { useForm } from "react-hook-form";
import { SucsessModal } from "./sucsessModal";
import { useState } from "react";

interface FormData {
  email: string;
}

interface FormProps {
  handleButtonClick: () => void;
}

export const Form: React.FC<FormProps> = ({ handleButtonClick }) => {
  const [modal, setModal] = useState(false);
  const [showFormInside, setShowFormInside] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); //Тут должна быть логика отправки данных на сервер
    setModal(true);
    setShowFormInside(false);
    setTimeout(() => {
      handleButtonClick();
    }, 4000);
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleButtonClick}></div>
      {showFormInside && (
        <div className={styles.formWrapper}>
          <button className={styles.closeButton} onClick={handleButtonClick}>
            ✖
          </button>
          <h2 className={styles.title}>Подписаться на рассылку</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Введите ваш email"
              className={styles.input}
              {...register("email", { required: "Заполните поле e-mail" })}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
            <button type="submit" className={styles.submitButton}>
              Подписаться
            </button>
          </form>
        </div>
      )}
      {modal && <SucsessModal handleButtonClick={handleButtonClick} />}
    </>
  );
};
