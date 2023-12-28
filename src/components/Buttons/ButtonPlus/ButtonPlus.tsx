import React from "react";
import Image from "next/image";
import styles from "./ButtonPlus.module.scss";
import plus from "./plus.svg";

interface ButtonPlusProps {
  className?: string;
  onClick?: () => void;
}

function ButtonPlus(props: ButtonPlusProps) {
  const { className = "", onClick } = props;
  return (
    <div onClick={onClick} className={`${styles.main} ${className}`}>
      <Image src={plus} alt="Plus" />
    </div>
  );
}

export default ButtonPlus;
