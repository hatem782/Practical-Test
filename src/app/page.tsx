import React from "react";
import PageProducts from "@/content/PageProducts/PageProducts";
import PopupProduct from "@/content/PopupProduct/PopupProduct";
import PopupCart from "@/content/PopupCart/PopupCart";

function page() {
  return (
    <div>
      <PageProducts />
      <PopupProduct />
      <PopupCart />
    </div>
  );
}

export default page;
