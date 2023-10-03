import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "Main",
  initialState: {
    popModal: false,
    loginModal: false,
  },
  reducers: {
    setPopModal: (state, action) => {
      state.popModal = action.payload;
    },
    setLoginModal: (state, action) => {
      state.loginModal = action.payload;
    },
  },
});

export const { setPopModal, setLoginModal } = MainSlice.actions;
export default MainSlice.reducer;
