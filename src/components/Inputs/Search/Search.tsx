import React from "react";
import Image from "next/image";
import Flex from "@/components/Flex/Flex";
import { search } from "@/assets/icons";

import styles from "./Search.module.scss";

interface PropsType {
  placeholder?: string;
  onChange?: (text: string) => void;
  value?: string;
  name?: string;
  className?: string;
}

function Search(props: PropsType) {
  const {
    placeholder = "Searching for...",
    onChange = () => {},
    value = "",
    name = "search",
    className = "",
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Flex flex="start" className={`${styles.main} ${className}`}>
      <Image src={search} alt="search" />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </Flex>
  );
}

export default Search;
