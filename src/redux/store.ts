import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import oneProdReducer from "./Slices/OneProdSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    oneProdReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
