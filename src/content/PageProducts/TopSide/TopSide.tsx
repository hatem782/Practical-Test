import React from "react";
import Image from "next/image";
import styles from "./TopSide.module.scss";
import Paper from "@/components/Paper/Paper";
import { T20, T22 } from "@/components/Texts/Texts";
import Flex from "@/components/Flex/Flex";

import { bloks, lines } from "@/assets/icons";

interface showTypes {
  type: string;
  icon: string;
  id: number;
}

const showTypes: Array<showTypes> = [
  {
    type: "bloks",
    icon: bloks,
    id: 1,
  },
  {
    type: "lines",
    icon: lines,
    id: 2,
  },
];

const TopSide = () => {
  const nbResults: number = 48;
  const prodSearchName: string = "mobile phone";
  const isSearching: boolean = true;

  const [showType, setShowType] = React.useState<showTypes>(showTypes[0]);

  return (
    <Paper>
      <Flex flex="between">
        <div>
          <T22 weight={600} className={styles.search_for}>
            {isSearching
              ? `Searching for “ ${prodSearchName} ”`
              : "All Products"}
          </T22>
          <T20 weight={400} className={styles.nb_results}>
            {nbResults} results found
          </T20>
        </div>
        <Flex flex="between" className={styles.products_show_type}>
          <T20 weight={400} className={styles.nb_results}>
            View :
          </T20>
          {showTypes.map((type) => (
            <Image
              key={type.id}
              src={type.icon}
              alt={type.type}
              onClick={() => setShowType(type)}
              className={`
              ${styles.icon} 
              ${type.id === showType.id && styles.active}`}
            />
          ))}
        </Flex>
      </Flex>
    </Paper>
  );
};

export default TopSide;
