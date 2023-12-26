import Image from "next/image";
import React from "react";
import styles from "./ButtonRoundedIcon.module.scss";
import Flex from "@/components/Flex/Flex";

interface ButtonProps {
  name: string;
  icon: string;
  onClick?: () => void;
}

const ButtonRoundedIcon = (props: ButtonProps) => {
  const { name = "", icon = "", onClick = () => {} } = props;
  return (
    <Flex onClick={onClick} className={styles.main}>
      <Image src={icon} alt={name} />
    </Flex>
  );
};

export default ButtonRoundedIcon;
