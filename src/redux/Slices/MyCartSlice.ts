import { toast } from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/Product.inter";

type StateType = {
  products: Product[];
  open: boolean;
};

export const initialState = {
  products: [],
  open: false,
} as StateType;

export const MyCart = createSlice({
  name: "MyCart",
  initialState,
  reducers: {
    reset: () => initialState,
    AddToCart: (state, action) => {
      const product = action.payload;
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index === -1) {
        product.quantity = 1;
        state.products.push(product);
        toast.success("Product added to cart");
      } else {
        state.products[index].quantity += 1;
      }
    },
    RemoveFromCart: (state, action) => {
      const product = action.payload;
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        if (state.products[index].quantity === 1) {
          state.products.splice(index, 1);
          toast.success("Product removed from cart");
        } else {
          state.products[index].quantity -= 1;
        }
      }
    },
    OpenCart: (state) => {
      state.open = true;
    },
    CloseCart: (state) => {
      state.open = false;
    },
  },
});

export const { reset, OpenCart, CloseCart, AddToCart, RemoveFromCart } =
  MyCart.actions;
export default MyCart.reducer;
