import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import newCustomerReducer from './slice/NewCustomerSlice.jsx'
import dataReducer from './slice/dataPageSilce.jsx'

const store = configureStore({
reducer:{
newCustomerState:newCustomerReducer,
data:dataReducer
}
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
