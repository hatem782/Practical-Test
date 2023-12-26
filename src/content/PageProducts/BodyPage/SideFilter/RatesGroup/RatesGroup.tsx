import React from "react";
import styles from "./RatesGroup.module.scss";
import { checkboxType } from "@/types/Categs.inter";
import { T22 } from "@/components/Texts/Texts";
import CheckBox from "@/components/Inputs/CheckBox/CheckBox";
import Rates from "@/components/Rates/Rates";

function RatesGroup() {
  const [categs, setCategs] = React.useState<checkboxType[]>([
    { name: "5", selected: false },
    { name: "4", selected: false },
    { name: "3", selected: false },
    { name: "2", selected: false },
    { name: "1", selected: false },
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
        <CheckBox
          key={categ.name}
          onChange={handleCheck}
          item={categ}
          withChild
        >
          <Rates rates={Number(categ.name)} />
        </CheckBox>
      ))}
    </div>
  );
}

export default RatesGroup;
