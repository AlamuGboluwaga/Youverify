import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API;

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (user,{ rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}`);
      //   console.log("RESPONSE",response.data);
      return response?.data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  item: [],
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
      return {
        ...state,
        status: "Success",
        firstName:action
      };
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      return { ...state, status: "Rejeted", error: action.payload };
    });
  },
});
export const { userLoaded, logoutUser } = dataSlice.actions;

export default dataSlice.reducer;
