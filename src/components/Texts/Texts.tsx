import React from "react";
import styles from "./Texts.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  weight?: number;
}

function T40(props: Props) {
  const { children, className = "", weight = 400 } = props;
  return (
    <p style={{ fontWeight: weight }} className={`${styles.t40} ${className}`}>
      {children}
    </p>
  );
}

function T35(props: Props) {
  const { children, className = "", weight = 400 } = props;
  return (
    <p style={{ fontWeight: weight }} className={`${styles.t35} ${className}`}>
      {children}
    </p>
  );
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

function T16(props: Props) {
  const { children, className = "", weight = 400 } = props;
  return (
    <p style={{ fontWeight: weight }} className={`${styles.t16} ${className}`}>
      {children}
    </p>
  );
}

export { T40, T35, T22, T20, T16 };
