import React from "react";
import Image from "next/image";
import Paper from "@/components/Paper/Paper";
import { useAppDispatch } from "@/redux/hooks";
import styles from "./ProductCard.module.scss";
import { Product } from "@/types/Product.inter";
import { T20, T22 } from "@/components/Texts/Texts";
import Rates from "@/components/Rates/Rates";
import Flex from "@/components/Flex/Flex";
import ButtonPlus from "@/components/Buttons/ButtonPlus/ButtonPlus";
import { ShowProd } from "@/redux/Slices/OneProdSlice";

import { eye } from "@/assets/icons";

interface ProductCardProps {
  className?: string;
  product: Product;
}

function ProductCard(props: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { className = "", product } = props;

  const ShowProduct = () => {
    dispatch(ShowProd(product));
  };

  return (
    <Paper className={`${styles.main} ${className}`}>
      <div className={styles.eye} onClick={ShowProduct}>
        <Image src={eye} alt="eye" />
      </div>
      <Image src={product.img} className={styles.mainImg} alt="poduct" />
      <div className={styles.content}>
        <T22 weight={600}>{product.title}</T22>
        <Rates rates={product.rates} className={styles.rates} />
        <Flex flex="between" className={styles.card_bottom}>
          <T20 weight={600}>${product.price}.00</T20>
          <ButtonPlus />
        </Flex>
      </div>
    </Paper>
  );
}

export default ProductCard;
