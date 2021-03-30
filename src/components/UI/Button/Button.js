import React from "react";
import styles from "./Button.module.scss";

const Button = ({ onButtonClick, children }) => {
  return (
    <button onClick={() => onButtonClick()} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
