import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API;
const url = import.meta.env.VITE_URL;
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (k,{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${api}`
      );
      return response?.data ;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  name:"userState",
  user:[],
  status: "",
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      return { ...state, status: "Pending" };
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const user = action.payload;
      if(user.length ===0){
        return { ...state, staus: "Data is Empty", status: "Success but no Data" };
      }
      return{
        ...state,
        status:"Success",
        user:action.payload
       
      }

        
      ;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      return { ...state, status: "Rejected", error: action.payload };
    });
  },
});

// Exporting fetchData thunk directly if needed elsewh

export default dataSlice.reducer;
