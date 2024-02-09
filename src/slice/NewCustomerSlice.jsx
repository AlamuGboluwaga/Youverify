import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api =import.meta.env.VITE_API;
console.log(api);

export const newCustomer = createAsyncThunk(
  "newSlice/newCustomer",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(api, {});
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
        };
      })
      .addCase(newCustomer.fulfilled, (state, action) => {
        return {
          ...state,
          status: "Success",
          user: action.payload,
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
