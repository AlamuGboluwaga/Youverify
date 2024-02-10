import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const api =import.meta.env.VITE_API

export const dataFetch = createAsyncThunk(
    "dataSlice/dataFetch",async(data,{rejectWithValue})=>{
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
  user:[],
  status: "",
  isLoading: false,
  error: false,
};

const dataSlice = createSlice({
    name:"dataSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(dataFetch.pending, (state, action) => {
            return {
              ...state,
              status: "Pending",
              isLoading: true,
              error: false,
            };
          })
          builder.addCase(dataFetch.fulfilled, (state,action) => {
           
            return { 
                ...state,
                 status:'Success',
                 user:action.payload,
                isLoading:false,
                error: false,
             };
          })
          builder.addCase(dataFetch.rejected,(state,action)=>{
            return {
              ...state,
              status: "Rejected",
              isLoading: false,
              error: action.payload,
            };
          })
    }

})


export default dataSlice.reducer