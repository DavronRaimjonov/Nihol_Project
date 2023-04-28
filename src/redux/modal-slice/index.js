import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logoutModalVisblity: false,
  settingModalVisibilty: false,
  langugageModalVisibilty: false,
  userModalVisibility: false,
  createdUserVisibility: false,
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
    switchCreatedUser(state) {
      state.createdUserVisibility = !state.createdUserVisibility;
    },
  },
});

export const { switchLogout, switchSetting, switchLanguage, switchUser,switchCreatedUser } =
  ModalSlice.actions;

export default ModalSlice.reducer;
