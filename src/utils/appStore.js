import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import skillReducer from "./skillSlice"
import npmModuleReducer from "./npmModuleSlice"
import educationReducer from "./education"
import projectReducer from "./projectSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        skill:skillReducer,
        npmModule : npmModuleReducer,
        education: educationReducer,
        project:projectReducer,
    }
})


export default appStore