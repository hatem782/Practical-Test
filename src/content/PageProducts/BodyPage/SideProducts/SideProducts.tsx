import React from "react";
import styles from "./SideProducts.module.scss";
import Flex from "@/components/Flex/Flex";
import Paper from "@/components/Paper/Paper";

function SideProducts() {
  return (
    <Flex flex="between" className={styles.main}>
      <Paper className={styles.card} />
      <Paper className={styles.card} />
      <Paper className={styles.card} />
      <Paper className={styles.card} />
      <Paper className={styles.card} />
      <Paper className={styles.card} />
    </Flex>
  );
}

export default SideProducts;
