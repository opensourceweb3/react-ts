import React from "react";
import styles from "./style.css";

const Foo: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>this is the foo component.</div>
      <div className={styles.content}>this is the foo component.</div>
    </div>
  );
};

export default Foo;
