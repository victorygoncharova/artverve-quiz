import React from "react";
import Button from "../UI/Button/Button";
import styles from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = ({
  answers,
  question,
  quizLength,
  answerNumber,
  state,
  rightAnswerId,
  showRight,
  image,
  onAnswerClick,
  onButtonClick,
}) => {
  const btnText =
    answerNumber === quizLength ? "Узнать результат" : "Следующий вопрос";

  return (
    <section className={styles.activeQuiz}>
      <div className={styles.count}>
        <span>
          {" "}
          {answerNumber} / {quizLength}{" "}
        </span>
      </div>

      <div
        className={styles.img}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={styles.content}>
        <h2 className={styles.headline}>{question}</h2>
        <AnswersList
          state={state}
          answers={answers}
          rightAnswerId={rightAnswerId}
          showRight={showRight}
          onAnswerClick={onAnswerClick}
        />
        {state ? (
          <Button onButtonClick={onButtonClick}>{btnText}</Button>
        ) : null}
      </div>
    </section>
  );
};

export default ActiveQuiz;
