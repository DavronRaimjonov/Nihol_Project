import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../../utils/storege";

const initialState = getLocal("lang") || {
  lang: localStorage.getItem("lang") || "uzLotin",
};
const LocalSlice = createSlice({
  name: "local-slice",
  initialState,
  reducers: {
    switchLocaleLang(state, action) {
      return { ...state, lang: action.payload };
    },
  },
});

export const { switchLocaleLang } = LocalSlice.actions;

export default LocalSlice.reducer;
