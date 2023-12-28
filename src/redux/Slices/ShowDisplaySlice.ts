import { createSlice } from "@reduxjs/toolkit";

type ShowDisplayType = {
  display: "grid" | "lines";
};

const initialState = {
  display: "grid",
} as ShowDisplayType;

export const ShowDisplay = createSlice({
  name: "ShowDisplay",
  initialState,
  reducers: {
    SetDisplay: (state, actions) => {
      state.display = actions.payload;
    },
  },
});

export const { SetDisplay } = ShowDisplay.actions;
export default ShowDisplay.reducer;
