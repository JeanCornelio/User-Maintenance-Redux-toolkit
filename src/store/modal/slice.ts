import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const  modalSlice = createSlice({
    name:"modalSlice",
    initialState: false,
    reducers:{
        toggleModal:(state, action:PayloadAction<boolean>)=>{
             return action.payload
        },
    }

}) 

export default modalSlice.reducer;

export const {toggleModal} =  modalSlice.actions