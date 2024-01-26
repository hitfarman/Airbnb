import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    // rtk reducer
    home: homeReducer,
    // traditional reduce
    entire: entireReducer
  }
})

export default store