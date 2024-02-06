import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API;

const registerUser = createAsyncThunk(async(user,{rejectWithValue})=>{
    try {
     const response =  await axios.post(`${api}`,user) 
     console.log(response.data);
    } catch (error) {
        console.error(error.message);
        rejectWithValue(error)
    }

})

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
};

const newCustomerSlice=createSlice({
    name:"newcustomer",
    initialState,
    reducers:{
   postData: (state)=>{}
    }

})
export const {postData } = newCustomerSlice.actions;
export default newCustomerSlice.reducer