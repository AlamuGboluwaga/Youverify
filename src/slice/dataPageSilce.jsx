import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const api =import.meta.env.VITE_API

export const dataFetch = createAsyncThunk(
    "data/dataFetch",async(data,{rejectWithValue})=>{
try {
   const response = await axios.get(`${api}`) 
  return response.data
  
} catch (error) {
  console.log(error.message);  
  return rejectWithValue(error.response.data)
}
    }
)
const initialState = {
  loading: false,
  user: [],
  error:'',
  status: "",
};

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(dataFetch.pending, (state, action) => {
            return {
              ...state,
              loading: true,
            };
          })
          builder.addCase(dataFetch.fulfilled, (state,action) => {
           
            return {
              ...state,
              loading: false,
              user: action.payload,
              error: '',
              status: "Success",
            };
          })
          builder.addCase(dataFetch.rejected,(state,action)=>{
            return {
              ...state,
              loading: false,
              user: [],
              error: action.payload,
              status: "Rejected",
            };
          })
    }

})


export default dataSlice.reducer