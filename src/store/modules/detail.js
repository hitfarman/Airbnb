import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detai",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, {payload}) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoAction } = detailSlice.actions

export default detailSlice.reducer