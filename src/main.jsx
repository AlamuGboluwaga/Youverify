import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import newCustomerReducer from './slice/NewCustomerSlice.jsx'
import DataFetchReducer from './slice/DataFetchSlice.jsx';
import { Provider } from "react-redux";

const store =configureStore({
  reducer:{
    customer:newCustomerReducer,
    DataFetch: DataFetchReducer
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
