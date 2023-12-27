"use client";

import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./PopupProduct.module.scss";
import Flex from "@/components/Flex/Flex";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { HideProd } from "@/redux/Slices/OneProdSlice";

import { T20, T22, T35, T40 } from "@/components/Texts/Texts";
import Rates from "@/components/Rates/Rates";
import Button from "@/components/Buttons/Button/Button";

function PopupProduct() {
  const product = useAppSelector((state) => state.oneProdReducer.product);
  const show = useAppSelector((state) => state.oneProdReducer.is_open);
  const dispatch = useAppDispatch();

  const ClosePopup = () => {
    dispatch(HideProd());
  };

  if (!show) return null;

  return (
    <Flex className={styles.main}>
      <div className={styles.popup}>
        <Flex className={styles.close} onClick={ClosePopup}>
          <IoCloseOutline />
        </Flex>
        <Flex className={styles.product}>
          <Flex className={styles.main_img}>
            <Image
              src={product?.img || ""}
              alt="product"
              className={styles.main_img}
            />
            <Flex className={styles.colors}>
              {product?.colors.map((color: string) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className={styles.color}
                />
              ))}
            </Flex>
          </Flex>
          <div className={styles.infos}>
            <T35 weight={700}>{product?.title}</T35>
            <T22 weight={600} className={styles.category}>
              Category : {product?.category}
            </T22>
            <T40 weight={700} className={styles.price}>
              ${product?.price}.00
            </T40>
            <Rates rates={product?.rates} className={styles.rates} />
            <T20 className={styles.description}>{product?.description}</T20>

            <Button className={styles.btn}>Add to cart</Button>
          </div>
        </Flex>
      </div>
    </Flex>
  );
}

export default PopupProduct;
