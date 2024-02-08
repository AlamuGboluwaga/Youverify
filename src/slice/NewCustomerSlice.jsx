import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { build } from "vite"


const initialState={
user:[],
status:"",
isLoading:false,
error:false
}

export const fetchCustomers= createAsyncThunk()



const customerSlice = createSlice({
  initialState,
  reducers:{},
  extraReducers:()=>{
    builder.addCase(

    )
  }
})


export default customerSlice.reducer