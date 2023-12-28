import React from "react";
import styles from "./SideProducts.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { Product } from "@/types/Product.inter";

import products from "@/data/products";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";

function SideProducts() {
  const display = useAppSelector((state) => state.ShowDisplayReducer.display);
  return (
    <div className={`${styles.main} ${styles[display]}`}>
      {products.map((product: Product) => (
        <ProductCard
          display={display}
          className={styles.card}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default SideProducts;
