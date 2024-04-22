import React from "react";
import styles from "../styles/actionButton.module.scss";

export const ActionButton = ({ onClick, title }) => {
  return (
    <button onClick={onClick} className={styles.actionButton}>
      <span>{title}</span>
    </button>
  );
};
