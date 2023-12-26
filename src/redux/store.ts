import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;