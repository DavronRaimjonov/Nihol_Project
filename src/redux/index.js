import { configureStore } from "@reduxjs/toolkit";
import loginAuth from "./login-auth";
export const store = configureStore({
  reducer: {
    loginAuth,
  },
});
