"use client";

import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

import Flex from "@/components/Flex/Flex";
import Search from "@/components/Inputs/Search/Search";
import ButtonRoundedIcon from "@/components/Buttons/ButtonRoundedIcon/ButtonRoundedIcon";

import { logo, cart, user } from "@/assets/icons";

function Navbar() {
  const [searchName, setSearchName] = React.useState("");

  return (
    <div className={styles.main}>
      <Flex flex="between">
        <Image src={logo} alt="logo" className={styles.logo} />
        <Search value={searchName} onChange={setSearchName} />

        <Flex className={styles.icons}>
          <ButtonRoundedIcon name="user" icon={user} />
          <ButtonRoundedIcon name="cart" icon={cart} withNumber number={0} />
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
