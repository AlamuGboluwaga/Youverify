import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react'

const api = import.meta.env.VITE_API;


export const fetchData=createAsyncThunk(
    "data/fetchData",async({rejectWithValue})=>{
try {
    const response = axios.get(`${api}`);
    return response?.data
} catch (error) {
    console.log(error.message);
    rejectWithValue(error.message)
}
    }
)

const initialState = {
  firstName: api,
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
  status:"",
  item:[]
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchData.pending,(state,action)=>{
        state.status ="Pending"
    }).addCase(fetchData.fulfilled,(state,action)=>{
        state.status = "Success"
        state.item =action.payload
    }).addCase(fetchData.rejected,(state,action)=>{
        state.status = "Rejected"
    })
  },
}); 

export default dataSlice.reducer