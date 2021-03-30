import React, { Component } from "react";
import Header from "../../components/Header/Header";
import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={styles.main}>{this.props.children}</main>
      </>
    );
  }
}
export default Layout;
