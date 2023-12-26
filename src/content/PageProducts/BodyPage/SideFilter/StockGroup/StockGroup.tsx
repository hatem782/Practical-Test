import React from "react";
import styles from "./StockGroup.module.scss";
import { checkboxType } from "@/types/Categs.inter";
import { T22 } from "@/components/Texts/Texts";
import CheckBox from "@/components/Inputs/CheckBox/CheckBox";

function StockGroup() {
  const [categs, setCategs] = React.useState<checkboxType[]>([
    { name: "In Stocks", selected: false },
    { name: "Out Of Stocks", selected: false },
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
      <T22 weight={600}>Products Stocks</T22>
      {categs.map((categ) => (
        <CheckBox key={categ.name} onChange={handleCheck} item={categ} />
      ))}
    </div>
  );
}

export default StockGroup;
