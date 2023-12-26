"use client";

import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

import { logo, cart, user } from "@/assets/icons";

import Flex from "@/components/Flex/Flex";
import ButtonRoundedIcon from "@/components/Buttons/ButtonRoundedIcon/ButtonRoundedIcon";

function Navbar() {
  return (
    <div className={styles.main}>
      <Flex flex="between">
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1>there</h1>

        <Flex className={styles.icons}>
          <ButtonRoundedIcon name="user" icon={user} />
          <ButtonRoundedIcon name="cart" icon={cart} />
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
