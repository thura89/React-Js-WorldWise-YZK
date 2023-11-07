import React from "react";
import Map from "../components/Map";

import styles from "./AppLayout.module.css";
import Sidebar from "../components/SideBar";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
