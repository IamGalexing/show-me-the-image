import React from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className={styles.head}>Show me the image</h1>
    </header>
  );
};

export default Header;
