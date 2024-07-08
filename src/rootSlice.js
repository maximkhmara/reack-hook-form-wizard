import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    category: "",
    size: "",
    sause: "",
    cheese: "",
    image: "",
  },
  reducers: {
    chooseCategory: (state, action) => {
      state.category = action.payload;
    },
    chooseSize: (state, action) => {
      state.size = action.payload;
    },
    chooseSause: (state, action) => {
      state.sause = action.payload;
    },
    chooseCheese: (state, action) => {
      state.cheese = action.payload;
    },
    chooseImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  chooseCategory,
  chooseCheese,
  chooseSize,
  chooseSause,
  chooseImage,
} = rootSlice.actions;
