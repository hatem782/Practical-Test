import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { T20 } from "@/components/Texts/Texts";
import Flex from "@/components/Flex/Flex";
import { checkboxType } from "@/types/Categs.inter";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
  item: checkboxType;
  onChange?: (name: string) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  const { item, onChange = () => {} } = props;

  const handleCheck = () => {
    onChange(item.name);
  };

  return (
    <Flex flex="start" className={styles.checkbox}>
      <Flex onClick={handleCheck} className={styles.check}>
        {item.selected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Flex>
      <T20 weight={500}>{item.name}</T20>
    </Flex>
  );
};

export default CheckBox;
