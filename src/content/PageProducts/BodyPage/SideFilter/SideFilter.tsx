import React from "react";
import Paper from "@/components/Paper/Paper";
import styles from "./SideFilter.module.scss";

import CategsGroup from "./CategsGroup/CategsGroup";
import StockGroup from "./StockGroup/StockGroup";
import PriceRange from "./PriceRange/PriceRange";

function SideFilter() {
  return (
    <Paper className={styles.main}>
      <CategsGroup />
      <PriceRange />
      <StockGroup />
    </Paper>
  );
}

export default SideFilter;
