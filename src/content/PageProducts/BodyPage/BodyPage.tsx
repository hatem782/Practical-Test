import React from "react";
import styles from "./BodyPage.module.scss";
import Flex from "@/components/Flex/Flex";
import SideFilter from "./SideFilter/SideFilter";
import SideProducts from "./SideProducts/SideProducts";

function BodyPage() {
  return (
    <Flex flex="between" className={styles.main}>
      <SideFilter />
      <SideProducts />
    </Flex>
  );
}

export default BodyPage;
