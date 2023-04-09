import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutModalVisblity: false,
  settingModalVisibilty: false,
  langugageModalVisibilty: false,
};
const ModalSlice = createSlice({
  name: "ModalSlices",
  initialState,
  reducers: {
    switchLogout(state) {
      state.logoutModalVisblity = !state.logoutModalVisblity;
    },
    switchSetting(state) {
      state.settingModalVisibilty = !state.settingModalVisibilty;
    },
    switchLanguage(state) {
      state.langugageModalVisibilty = !state.langugageModalVisibilty;
    },
  },
});

export const { switchLogout, switchSetting, switchLanguage } =
  ModalSlice.actions;

export default ModalSlice.reducer;
