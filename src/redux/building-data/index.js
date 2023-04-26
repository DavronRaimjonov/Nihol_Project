import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {},
};
const BuildingData = createSlice({
  name: "building-data",
  initialState,
  reducers: {
    getBuildingData(state, { payload }) {
      state.data = payload;
    },
  },
});

export const { getBuildingData } = BuildingData.actions;
export default BuildingData.reducer;
