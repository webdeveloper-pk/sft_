import React from "react";
import styles from "./preLoader.module.css";
const PreLoader = () => {
  return (
    <div className={styles.loading}>
      <div>
        <div className={styles.bounce}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
