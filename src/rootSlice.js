// rootSlice.js
import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    base: "small",
    crust: "classic_thin",
    sause: "no_sause",
    cheese: "no_cheese",
    category: "",
    nameProduct: "",
    quantity: "",
    price: "",
    description: "",
    image: "",
  },
  reducers: {
    chooseBase: (state, action) => {
      state.base = action.payload.base;
      state.category = action.payload.category;
      state.nameProduct = action.payload.nameProduct;
      state.quantity = action.payload.quantity;
      state.price = action.payload.price;
      state.description = action.payload.description;
    },
    chooseCrust: (state, action) => {
      state.crust = action.payload;
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
  chooseBase,
  chooseCheese,
  chooseCrust,
  chooseSause,
  chooseImage,
} = rootSlice.actions;
