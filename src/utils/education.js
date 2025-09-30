import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name:"edcation",
    initialState:null,
    reducers:{
        addEducation:(state, action)=>{
            return action.payload
        },
        removeEducation:()=>{return null},
    },
})

export default educationSlice.reducer
export const {addEducation, removeEducation} = educationSlice.actions