import React from "react";
import styles from "./hero.module.scss";
import { ActionButton } from "../../UI/ActionButton";

export const Hero = ({ children }) => {
  return (
    <div className={styles.hero}>
      <div></div>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <ActionButton title={"Get Started"} />
      </div>
      {children}
    </div>
  );
};
