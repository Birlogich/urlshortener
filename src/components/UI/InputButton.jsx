import React from "react";
import styles from "../styles/inputButton.module.scss";

export const InputButton = ({ onClick, title, copied }) => {
  return (
    <button
      onClick={onClick}
      className={copied ? styles.inputButtonCopied : styles.inputButton}
    >
      <span>{title}</span>
    </button>
  );
};
