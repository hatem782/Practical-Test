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
import { AddToCart } from "@/redux/Slices/MyCartSlice";

import { eye } from "@/assets/icons";

interface ProductCardProps {
  className?: string;
  product: Product;
  display?: string;
}

function ProductCard(props: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { className = "", product, display = "grid" } = props;

  const ShowProduct = () => {
    dispatch(ShowProd(product));
  };

  const AddProduct = () => {
    dispatch(AddToCart(product));
  };

  return (
    <Paper className={`${styles.main} ${className} ${styles[display]}`}>
      <div className={styles.eye} onClick={ShowProduct}>
        <Image src={eye} alt="eye" />
      </div>
      <Image src={product.img} className={styles.mainImg} alt="poduct" />
      <div className={styles.content}>
        <div>
          <T22 weight={600}>{product.title}</T22>
          <Rates rates={product.rates} className={styles.rates} />
        </div>
        <Flex flex="between" className={styles.card_bottom}>
          <T20 weight={600}>${product.price}.00</T20>
          {display === "grid" && <ButtonPlus onClick={AddProduct} />}
        </Flex>
      </div>
      {display === "lines" && (
        <ButtonPlus className={styles.btn} onClick={AddProduct} />
      )}
    </Paper>
  );
}

export default ProductCard;
