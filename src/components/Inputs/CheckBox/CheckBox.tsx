import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { T20 } from "@/components/Texts/Texts";
import Flex from "@/components/Flex/Flex";
import { checkboxType } from "@/types/Categs.inter";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
  item: checkboxType;
  onChange?: (name: string) => void;
  withChild?: boolean;
  children?: React.ReactNode;
}

const CheckBox = (props: CheckBoxProps) => {
  const { item, onChange = () => {}, withChild = false, children } = props;

  const handleCheck = () => {
    onChange(item.name);
  };

  return (
    <Flex flex="start" className={styles.checkbox}>
      <Flex onClick={handleCheck} className={styles.check}>
        {item.selected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Flex>
      {!withChild && <T20 weight={400}>{item.name}</T20>}
      {withChild && children}
    </Flex>
  );
};

export default CheckBox;
