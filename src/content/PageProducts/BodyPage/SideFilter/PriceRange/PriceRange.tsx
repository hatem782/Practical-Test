import React from "react";
import { T22 } from "@/components/Texts/Texts";
import Flex from "@/components/Flex/Flex";
import styles from "./PriceRange.module.scss";

function PriceRange() {
  return (
    <div className={styles.main}>
      <T22 weight={600}>Price Range</T22>
      <Flex flex="between" className={styles.ranges}>
        <input type="number" name="min" placeholder="Min Price" />
        <span> - </span>
        <input type="number" name="max" placeholder="Max Price" />
      </Flex>
    </div>
  );
}

export default PriceRange;
