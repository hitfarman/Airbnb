import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer  from './modules/detail'

const store = configureStore({
  reducer: {
    // rtk reducer
    home: homeReducer,
    detail: detailReducer,
    
    // traditional reducer
    entire: entireReducer
  }
})

export default store