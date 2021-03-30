import React from "react";
import { NavLink } from "react-router-dom";
import Gallery from "../../components/UI/Gallery/Gallery";
import styles from "./StartQuiz.module.scss";

const StartQuiz = () => {
  return (
    <section className={styles.wrapper}>
      <Gallery />
      <div className={styles.body}>
        <h1 className={styles.headline}>Разбираетесь в искусстве?</h1>
        <p className={styles.subtext}>
          Пройдите тест и проверьте свои знания в классическом и современном
          искусстве
        </p>
        <NavLink to="/quiz" className={styles.btn}>
          Начать тест
        </NavLink>
      </div>
    </section>
  );
};

export default StartQuiz;
