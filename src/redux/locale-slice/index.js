import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("locale") || "uzLotin",
};
const LocalSlice = createSlice({
  name: "local-slice",
  initialState,
  reducers: {
    switchLocaleLang(state, action) {},
  },
});

export const { switchLocaleLang } = LocalSlice.actions;

export default LocalSlice.reducer;
