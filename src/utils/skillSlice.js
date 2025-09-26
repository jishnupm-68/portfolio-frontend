import { createSlice } from "@reduxjs/toolkit";


const skillSlice = createSlice({
    name:"skill",
    initialState:null,
    reducers:{
        addSkill:(state, action)=>{
            return action.payload
        },
        removeSkill:(state, action)=> {return null}
    }
})

export default skillSlice.reducer
export const {addSkill, removeSkill} = skillSlice.actions