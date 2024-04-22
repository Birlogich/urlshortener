import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/container.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
