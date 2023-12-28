import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import ShowDisplayReducer from "./Slices/ShowDisplaySlice";
import oneProdReducer from "./Slices/OneProdSlice";

export const store = configureStore({
  reducer: {
    ShowDisplayReducer,
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
