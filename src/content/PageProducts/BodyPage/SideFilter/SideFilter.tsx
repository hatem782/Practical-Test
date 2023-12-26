import React from "react";
import Paper from "@/components/Paper/Paper";
import styles from "./SideFilter.module.scss";

import CategsGroup from "./CategsGroup/CategsGroup";

function SideFilter() {
  return (
    <Paper className={styles.main}>
      <CategsGroup />
    </Paper>
  );
}

export default SideFilter;
