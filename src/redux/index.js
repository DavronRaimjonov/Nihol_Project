import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./locale-slice";
import modalSlice from "./modal-slice";
export const store = configureStore({
  reducer: {
    locale: localeSlice,
    modal: modalSlice,
  },
});
