import React, { Component } from "react";
import { img11, img15, img17, img6, img7, img9 } from "../../../images/index";
import styles from "./Gallery.module.scss";

export default class Gallery extends Component {
  state = {
    cls: "",
    imgCount: 0,
    images: [img6, img17, img7, img15],
  };

  componentDidMount() {
    this.setState((cls) => {
      return {
        cls: "animated",
      };
    });
  }

  animationHandler = () => {
    const { imgCount, images } = this.state;

    this.setState(({ imgCount }) => {
      return {
        imgCount: imgCount + 1,
      };
    });

    if (imgCount === images.length - 1) {
      this.setState({ imgCount: 0 });
    }
  };

  render() {
    const { imgCount, images, cls } = this.state;
    const classes = [styles.gallery, cls];

    return (
      <div className={classes.join(" ")}>
        <div
          className={styles.leftColumn}
          style={{ backgroundImage: `url(${images[imgCount]})` }}
          onAnimationIteration={() => this.animationHandler()}
        ></div>
        <div
          className={styles.rightTopColumn}
          style={{ backgroundImage: `url(${img9})` }}
        ></div>
        <div
          className={styles.rightBottomColumn}
          style={{ backgroundImage: `url(${img11})` }}
        ></div>
      </div>
    );
  }
}
