"use client";

import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import styles from "./PopupCart.module.scss";
import Flex from "@/components/Flex/Flex";

import { cart } from "@/assets/icons";
import { T16, T20, T22 } from "@/components/Texts/Texts";
import Button from "@/components/Buttons/Button/Button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  AddToCart,
  CloseCart,
  RemoveFromCart,
} from "@/redux/Slices/MyCartSlice";
import { Product } from "@/types/Product.inter";

interface OneProdProps {
  product?: Product;
}

const OneProd = (props: OneProdProps) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const AddProduct = () => {
    dispatch(AddToCart(product));
  };

  const RemoveProduct = () => {
    dispatch(RemoveFromCart(product));
  };

  return (
    <Flex flex="start" className={styles.product}>
      <Image src={product?.img || ""} alt="product" />
      <div className={styles.content}>
        <T22 weight={600}>{product?.title}</T22>
        <T16 weight={300} className={styles.qtt}>
          ${product?.price}.00 x {product?.quantity}
        </T16>
        <T20 weight={600} className={styles.price}>
          Total : ${(product?.price || 0) * (product?.quantity || 0)}.00
        </T20>
      </div>
      <Flex className={styles.plus_moin}>
        <div className={styles.plus}>
          <FaPlus onClick={AddProduct} />
        </div>
        <div className={styles.moin}>
          <FaMinus onClick={RemoveProduct} />
        </div>
      </Flex>
    </Flex>
  );
};

function PopupCart() {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.MyCartSlice.open);
  const products = useAppSelector((state) => state.MyCartSlice.products);

  const [total, setTotal] = React.useState(0);

  const ClosePopup = () => {
    dispatch(CloseCart());
  };

  useEffect(() => {
    let totalHere = 0;
    products.forEach((product) => {
      totalHere += product.price * product.quantity;
    });
    setTotal(totalHere);
  }, [products]);

  if (!show) return null;

  return (
    <Flex flex="end" className={styles.main}>
      <Flex flex="between" className={styles.popup}>
        <Flex flex="between" className={styles.header}>
          <Flex flex="start" className={styles.image}>
            <Image src={cart} alt="cart" />
            <T22 weight={600}>{products.length} items</T22>
          </Flex>
          <Flex className={styles.close} onClick={ClosePopup}>
            <IoCloseOutline />
          </Flex>
        </Flex>

        <div className={styles.body}>
          {products.map((product) => (
            <OneProd key={product.id} product={product} />
          ))}
        </div>

        <Flex flex="between" className={styles.footer}>
          <Button>Checkout Now (${total}.00)</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PopupCart;
