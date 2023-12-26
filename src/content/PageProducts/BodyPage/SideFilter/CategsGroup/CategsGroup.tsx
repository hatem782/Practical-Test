import React from "react";
import styles from "./CategsGroup.module.scss";
import { checkboxType } from "@/types/Categs.inter";
import { T22 } from "@/components/Texts/Texts";
import CheckBox from "@/components/Inputs/CheckBox/CheckBox";

function CategsGroup() {
  const [categs, setCategs] = React.useState<checkboxType[]>([
    { name: "All", selected: false },
    { name: "Eye Glasses", selected: false },
    { name: "Watch", selected: false },
    { name: "Clothes", selected: false },
    { name: "Shoes", selected: false },
  ]);

  const handleCheck = (name: string) => {
    const newCategs = categs.map((categ) => {
      if (categ.name === name) {
        categ.selected = !categ.selected;
      }
      return categ;
    });
    setCategs(newCategs);
  };

  return (
    <div className={styles.group}>
      <T22 weight={600}>Products Categories</T22>
      {categs.map((categ) => (
        <CheckBox key={categ.name} onChange={handleCheck} item={categ} />
      ))}
    </div>
  );
}

export default CategsGroup;
