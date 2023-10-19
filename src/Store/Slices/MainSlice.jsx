import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "Main",
  initialState: {
    popModal: false,
    loginModal: false,
    // occupationCheck: false,
    userData: {
      name: "",
      occupation: "student",
      emailAddress: "",
      workEmailAddress: "",
      designation: "",
      nameInstitute: "",
      gender: "",
      city: "",
      howDoYouHear: "nAn",
    },
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
      state.userData = {};
    },
    setOccupation: (state, action) => {
      state.userData.occupation = action.payload;
    },
  },
});

export const {
  setPopModal,
  setLoginModal,
  setUserData,
  setLogout,
  setOccupation,
} = MainSlice.actions;
export default MainSlice.reducer;
