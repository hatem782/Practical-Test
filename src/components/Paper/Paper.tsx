import React from "react";
import styles from "./Paper.module.scss";

interface PropsType {
  className?: string;
  children: React.ReactNode;
}

function Paper(props: PropsType) {
  const { children, className = "" } = props;
  return <div className={`${styles.main} ${className}`}>{children}</div>;
}

export default Paper;
