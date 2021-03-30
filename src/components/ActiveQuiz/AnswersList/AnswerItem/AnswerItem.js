import React from "react";
import Notify from "../../../UI/Notify/Notify";
import styles from "./AnswerItem.module.scss";

const AnswerItem = ({ answer, onAnswerClick, state, showRight }) => {
  const cls = [
    styles.item,
    state ? styles[state] : "",
    showRight ? styles.showRight : "",
  ];

  return (
    <li
      className={cls.join(" ")}
      onClick={() => {
        onAnswerClick(answer.id);
      }}
    >
      <span>{answer.text}</span>{" "}
      {showRight || state === "success" ? <Notify /> : null}{" "}
    </li>
  );
};

export default AnswerItem;
