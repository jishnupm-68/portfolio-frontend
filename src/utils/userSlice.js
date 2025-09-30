import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state, actions)=> {
            return actions.payload },
        removeUser:()=>null
    }
})

export default userSlice.reducer
export const {addUser, removeUser} = userSlice.actions