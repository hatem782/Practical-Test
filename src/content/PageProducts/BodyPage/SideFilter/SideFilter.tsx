import React from "react";
import Paper from "@/components/Paper/Paper";
import styles from "./SideFilter.module.scss";

import CategsGroup from "./CategsGroup/CategsGroup";
import StockGroup from "./StockGroup/StockGroup";
import PriceRange from "./PriceRange/PriceRange";
import RatesGroup from "./RatesGroup/RatesGroup";
import ColorsGroup from "./ColorsGroup/ColorsGroup";

function SideFilter() {
  return (
    <Paper className={styles.main}>
      <CategsGroup />
      <PriceRange />
      <StockGroup />
      <RatesGroup />
      <ColorsGroup />
    </Paper>
  );
}

export default SideFilter;
