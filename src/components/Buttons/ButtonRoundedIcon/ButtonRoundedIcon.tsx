import Image from "next/image";
import React from "react";
import styles from "./ButtonRoundedIcon.module.scss";
import Flex from "@/components/Flex/Flex";

interface ButtonProps {
  name: string;
  icon: string;
  withNumber?: boolean;
  number?: number;
  onClick?: () => void;
}

const ButtonRoundedIcon = (props: ButtonProps) => {
  const {
    name = "",
    icon = "",
    onClick = () => {},
    withNumber = false,
    number = 0,
  } = props;
  return (
    <Flex onClick={onClick} className={styles.main}>
      {withNumber && <span className={styles.number}>{number}</span>}
      <Image src={icon} alt={name} />
    </Flex>
  );
};

export default ButtonRoundedIcon;
