import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dataFetch } from '../slice/dataPageSilce';
import CircularProgress from "@mui/material/CircularProgress";
const api = import.meta.env.VITE_API;

const DataPage = () => {
const [data, setdata] = useState([])
const disptch = useDispatch();
const dataState = useSelector(state=>state.dataFetchState)

  localStorage.setItem("dataState", dataState);


console.log(dataState);

useEffect(()=>{
disptch(dataFetch())
},[])


  return (
    <div className='className="bg-green-30 h-screen w-screen p-4 flex flex-col gap-10'>
      <h1 className="text-center">Data Page</h1>

      {dataState.isLoading ===true? <h1 className='text-center'>Loading...</h1>:dataState.user.length === 0 ? (
        <p className="text-center">Data is Empty!</p>
      ) : (
        <>
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <p> Id : {item.id}</p>
              <label className="flex fex-col gap-2 ">
                Name :
                <input
                  type="text"
                  value={item.firstName}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
              <label className="flex gap-2">
                Middle Name :
                <input
                  type="text"
                  value={item.middleName}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
              <label className="flex gap-2">
                Last Name :
                <input
                  type="text"
                  value={item.lastName}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
              <label className="flex gap-2">
                Email :
                <input
                  type="text"
                  value={item.email}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
              <label className="flex gap-2">
                Mobile :
                <input
                  type="text"
                  value={item.mobile}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
              <label className="flex gap-2">
                Date of Birth :
                <input
                  type="text"
                  value={item.dob}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
              <label className="flex gap-2">
                B V N :
                <input
                  type="text"
                  value={item.bvn}
                  className="border rounded pl-4 pb-1 pt-1 p-1"
                  disabled
                />
              </label>
            </div>
          ))}
        </>
      )} 
          </div>
  );
}

export default DataPage
