import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Slices/MainSlice";

const Store = configureStore({
  reducer: {
    Main: MainSlice,
  },
});

export default Store;
