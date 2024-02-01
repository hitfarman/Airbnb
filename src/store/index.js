import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './modules/main'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer  from './modules/detail'

const store = configureStore({
  reducer: {
    // rtk reducer
    main: mainReducer,
    home: homeReducer,
    detail: detailReducer,
    
    // traditional reducer
    entire: entireReducer
  }
})

export default store