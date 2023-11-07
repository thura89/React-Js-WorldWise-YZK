import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "../pages/Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} YZK World</p>
      </footer>
    </div>
  );
};

export default Sidebar;
