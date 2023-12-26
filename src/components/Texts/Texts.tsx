import React from "react";
import styles from "./Texts.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  weight?: number;
}

function T22(props: Props) {
  const { children, className = "", weight = 400 } = props;
  return (
    <p style={{ fontWeight: weight }} className={`${styles.t22} ${className}`}>
      {children}
    </p>
  );
}

function T20(props: Props) {
  const { children, className = "", weight = 400 } = props;
  return (
    <p style={{ fontWeight: weight }} className={`${styles.t20} ${className}`}>
      {children}
    </p>
  );
}

export { T22, T20 };
