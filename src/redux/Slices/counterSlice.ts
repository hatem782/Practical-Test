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
    ShowGrid: (state) => {
      state.display = "grid";
    },
    ShowLines: (state) => {
      state.display = "lines";
    },
  },
});

export const { ShowGrid, ShowLines } = ShowDisplay.actions;
export default ShowDisplay.reducer;
