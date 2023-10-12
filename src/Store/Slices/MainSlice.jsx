import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "Main",
  initialState: {
    popModal: false,
    loginModal: false,
    userData: null,
    status: false,
  },
  reducers: {
    setPopModal: (state, action) => {
      state.popModal = action.payload;
    },
    setLoginModal: (state, action) => {
      state.loginModal = action.payload;
    },
    setUserData: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    setLogout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { setPopModal, setLoginModal, setUserData, setLogout } =
  MainSlice.actions;
export default MainSlice.reducer;
