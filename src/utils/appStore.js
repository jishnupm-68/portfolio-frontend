import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import skillReducer from "./skillSlice"
import npmModuleReducer from "./npmModuleSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        skill:skillReducer,
        npmModule : npmModuleReducer,
    }
})


export default appStore