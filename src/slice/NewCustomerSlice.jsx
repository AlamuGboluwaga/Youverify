import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API;


export const newCustomer = createAsyncThunk(
  "newSlice/newCustomer",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(api, {
        firstName: user.firstName,
        middleName: user.middleName,
        lastName:user.lastName,
        email:user.email,
        mobile: user.mobile,
        dob: user.dob,
        bvn:user.bvn,
        password: user.password,
      });
      response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  use: [],
  status: "",
  isLoading: false,
  error: false,
};

const newCustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newCustomer.pending, (state, action) => {
        return {
          ...state,
          status: "Pending",
          isLoading: true,
          error: false,
        };
      })
      .addCase(newCustomer.fulfilled, (state, action) => {
       
        return {
          ...state,
          use: action.payload,
          status:"Success",
          isLoading: false,
          error: false,
        };
      })
      .addCase(newCustomer.rejected, () => {
        return {
          ...state,
          status: "Rejected",
          error: action.payload,
        };
      });
  },
});

export default newCustomerSlice.reducer;
