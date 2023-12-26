import React from "react";
import Image from "next/image";
import styles from "./ButtonPlus.module.scss";
import plus from "./plus.svg";

function ButtonPlus() {
  return (
    <div className={styles.main}>
      <Image src={plus} alt="Plus" />
    </div>
  );
}

export default ButtonPlus;
