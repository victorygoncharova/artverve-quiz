import React from "react";
import styles from "./FinishedQuiz.module.scss";

const FinishedQuiz = ({ results, quiz, repeatQuiz }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  let msg = "";

  const percentRightAnswer = successCount / quiz.length;

  if (percentRightAnswer >= 0.75) {
    msg = "Вы знаток искусства!";
  } else if (percentRightAnswer >= 0.5) {
    msg = "Хороший результат!";
  } else {
    msg = "Есть куда расти!";
  }

  return (
    <div className={styles.finishQuiz}>
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>{msg}</h2>
        <p className={styles.subtext}>
          Посетите сайт{" "}
          <a className={styles.link} href="https://artverve.ru/">
            artverve.com
          </a>{" "}
          и узнайте больше о современном и классическом искусстве
        </p>
        <button className={styles.btn} onClick={repeatQuiz}>
          Повторить тест
        </button>
      </div>
      <p className={styles.total}>
        {successCount}/{quiz.length}
      </p>
    </div>
  );
};

export default FinishedQuiz;
