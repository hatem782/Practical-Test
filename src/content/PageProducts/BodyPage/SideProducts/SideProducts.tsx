import React from "react";
import styles from "./SideProducts.module.scss";

import { Product } from "@/types/Product.inter";

import products from "@/data/products";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";

function SideProducts() {
  return (
    <div className={styles.main}>
      {products.map((product: Product) => (
        <ProductCard
          className={styles.card}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default SideProducts;
