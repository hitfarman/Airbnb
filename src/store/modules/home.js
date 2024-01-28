import { getHomeGoodPriceData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, {dispatch}) => {
  // 发送网络请求,一方面可以在这里直接拿 airbnbRequest.get发送get请求
  // const res = await airbnbRequest.get({url: "/home/goodprice"})

  // 但是, 也可以, 在service中的module中建一个单独的模块, 把每个请求的url, 请求参数等写好, 做进一步的封装;
  // 在这里就可以直接调这个封装的模块请求接口
  const res1 = await getHomeGoodPriceData()
  const res2 = await getHomeGoodPriceData()

  return {goodPrice: res1, highScore: res2}
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // 应该保存一个对象. 它不仅仅是个列表,它还包含title等数据,标题title也是属于数据的一部分的;有的还有子标题
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload.goodPrice
      state.highScoreInfo = payload.highScore
    })
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer