import styles from "./header.module.scss";
import logo from "../../../images/logo.svg?react";

const burgerImg = (
  <svg
    width="24.000000"
    height="21.000000"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <rect
      id="Rectangle"
      width="24.000000"
      height="3.000000"
      fill="#9E9AA8"
      fillOpacity="1.000000"
    />
    <rect
      id="Rectangle Copy"
      y="9.000000"
      width="24.000000"
      height="3.000000"
      fill="#9E9AA8"
      fillOpacity="1.000000"
    />
    <rect
      id="Rectangle Copy 2"
      y="18.000000"
      width="24.000000"
      height="3.000000"
      fill="#9E9AA8"
      fillOpacity="1.000000"
    />
  </svg>
);

export const Header = () => {
  return (
    <div className={styles.header}>
      <button>
        <img src={logo} />
      </button>
      <button>{burgerImg}</button>
    </div>
  );
};
