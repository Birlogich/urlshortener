import React from "react";
import styles from "../styles/main.module.scss";
import { Hero } from "./Hero/Hero";
import { Input } from "./Input/Input";
import { Statistics } from "./Statistics/Statistics";
import { Boost } from "./Boost/Boost";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Hero children={<Input />} />
      <Statistics />
      <Boost />
    </div>
  );
};
