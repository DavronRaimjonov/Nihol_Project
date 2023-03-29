import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const LoginAuth = createSlice({
  name: "Login",
  initialState,
  reducers: {},
});

export const {} = LoginAuth.actions;
export default LoginAuth.reducer;
