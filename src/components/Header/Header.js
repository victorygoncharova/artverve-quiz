import React from "react";
import { logo } from "../../images/index";
import styles from "./Header.module.scss";

const Header = (props) => (
  <header className={styles.header}>
    <a className={styles.logo} href="https://artverve.ru">
      <img src={logo} alt="Logo" />
    </a>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://artverve.ru/artists/"
            target="blank"
          >
            Все художники
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://artverve.ru/paintings/"
            target="blank"
          >
            Картины
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
