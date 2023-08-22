import { createSlice } from "@reduxjs/toolkit";

const categoryInitialState = {
  selected: "all",
};

const categorySlice = createSlice({
  name: "category",
  initialState: categoryInitialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export const filtersReducer = categorySlice.reducer;
