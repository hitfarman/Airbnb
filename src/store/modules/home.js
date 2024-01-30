import { 
  getHomeDiscountData, 
  getHomeGoodPriceData, 
  getHomeHighScoreData, 
  getHomeHotRecommendData, 
  getHomeLongForData, 
  getHomePlusData
} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/** 去掉 extraReducers后,如何把在这里拿到的结果放到对应的store的state里呢? 
    ---- 这里给createAsyncThunk传入的回调函数,除了payload,还有第二个参数 -- store = {dispatch, getState}
    store里有两个函数: dispatch 和 getState (getState一般不用,当网络请求需要依赖store里的某个state里的数据时,才需要使用getState去获取store中过的state)
*/
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, {dispatch}) => {
  /* getState一般不用,当网络请求需要依赖store里的某个state里的数据时,才需要使用getState去获取store中过的state
     比如: 如果当前state中还保存一个当前页码:page,这次请求时还需要把当前页码传进去,这时就需要使用getState了
     const state = getState()
     getHomeGoodPriceData(state.home.page).then(res => { })
  */
  
  // fetch multi home page data solution 2: 不经过extraReducer, 拿到数据后,在这里直接dispatch
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res))
  })

  getHomeLongForData().then(res => {
    dispatch(changeLongForInfoAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // page: 1,

    // 应该保存一个对象. 它不仅仅是个列表,它还包含title等数据,标题title也是属于数据的一部分的;有的还有子标题
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })}
})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer