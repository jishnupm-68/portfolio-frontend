import { createSlice } from "@reduxjs/toolkit";


const projectSlice = createSlice({
    name:"project",
    initialState:null,
    reducers:{
        addProject:(state, action)=>{
            return action.payload
        }, 
        removeProject :()=>{return null}
    }
})

export default projectSlice.reducer
export const {addProject, removeProject} = projectSlice.actions