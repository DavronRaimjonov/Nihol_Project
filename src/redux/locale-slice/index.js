import { createSlice } from "@reduxjs/toolkit";
// import { getLocal } from "../../utils/storege";

const initialState = {
  lang: localStorage.getItem("lang") || "uzLotin",
};
const LocalSlice = createSlice({
  name: "local-slice",
  initialState,
  reducers: {
    switchLocaleLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { switchLocaleLang } = LocalSlice.actions;

export default LocalSlice.reducer;
