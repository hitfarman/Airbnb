import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    /** 记录每个页面header到底展示什么样子,每个页面展示的header是不一样的 
     * 每次进入到一个新页面的时候,就要把它对应的 headerConfig 给它改掉
     * 因为,现在是多个页面共有的是同一个header组件,既然要显示的不一样,就要能让不同的页面对header进行配置
    */
    headerConfig: { 
      isFixed: false,
      topAlpha: false // 要不要设置顶部透明度,默认false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer