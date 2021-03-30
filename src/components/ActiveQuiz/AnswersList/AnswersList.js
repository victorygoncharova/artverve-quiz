import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import styles from "./AnswersList.module.scss";

const AnswersList = ({
  answers,
  state,
  rightAnswerId,
  showRight,
  results,
  onAnswerClick,
}) => {
  return (
    <ul className={styles.answersList}>
      {answers.map((answer, index) => {
        if (showRight && answer.id === rightAnswerId) {
          return (
            <AnswerItem
              key={index}
              answer={answer}
              onAnswerClick={onAnswerClick}
              state={state ? state[answer.id] : null}
              showRight={showRight}
              results={results}
            />
          );
        } else {
          return (
            <AnswerItem
              key={index}
              answer={answer}
              onAnswerClick={onAnswerClick}
              state={state ? state[answer.id] : null}
              results={results}
            />
          );
        }
      })}
    </ul>
  );
};
export default AnswersList;
