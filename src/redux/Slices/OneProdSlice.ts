import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/Product.inter";
import { img1 } from "@/assets/images";

type StateType = {
  product?: Product;
  is_open: boolean;
};

export const initialState = {
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    rates: 3,
    img: img1,
    category: "",
    colors: [],
    quantity: 0,
  },
  is_open: false,
} as StateType;

export const OneProd = createSlice({
  name: "OneProd",
  initialState,
  reducers: {
    reset: () => initialState,
    ShowProd: (state, action) => {
      state.is_open = true;
      state.product = action.payload;
    },
    HideProd: (state) => {
      state.is_open = false;
      state.product = initialState.product;
    },
  },
});

export const { ShowProd, HideProd, reset } = OneProd.actions;
export default OneProd.reducer;
