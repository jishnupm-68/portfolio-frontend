import { createSlice } from "@reduxjs/toolkit";



const npmModuleSlice = createSlice({
    name:'npmModuleSlice',
    initialState:null,
    reducers:{
        addModule:(state, action)=>{
            return action.payload
        },
        removeModule:()=>null,
    }
})


export default npmModuleSlice.reducer
export const {addModule, removeModule} = npmModuleSlice.actions