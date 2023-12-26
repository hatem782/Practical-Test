"use client";

import React from "react";
import styles from "./PageProducts.module.scss";
// import Paper from "@/components/Paper/Paper";
// import { T20, T22 } from "@/components/Texts/Texts";
// import Flex from "@/components/Flex/Flex";
import TopSide from "./TopSide/TopSide";

function PageProducts() {
  return (
    <div className={styles.main}>
      <TopSide />
    </div>
  );
}

export default PageProducts;
