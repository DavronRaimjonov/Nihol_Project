import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutModalVisblity: false,
  settingModalVisibilty: false,
  langugageModalVisibilty: false,
  userModalVisibility: false,
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
    switchUser(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
  },
});

export const { switchLogout, switchSetting, switchLanguage, switchUser } =
  ModalSlice.actions;

export default ModalSlice.reducer;
