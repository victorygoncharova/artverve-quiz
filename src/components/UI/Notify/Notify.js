import React from "react";
import { check } from "../../../images/index";
import styles from "./Notify.module.scss";

const Notify = () => (
  <div
    id="notify"
    className={styles.notify}
    style={{ backgroundImage: `url(${check})` }}
  ></div>
);

export default Notify;
