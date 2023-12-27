import React from "react";
import styles from "./Button.module.scss";

interface PropsType {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button(props: PropsType) {
  const { children, className = "", onClick = () => {} } = props;

  return (
    <button
      type="submit"
      className={`${styles.main} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
