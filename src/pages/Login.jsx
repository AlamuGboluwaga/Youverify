import React from 'react'
import { dataFetch } from "../slice/dataPageSilce";


const Login = () => {

  
  return (
    <div className="flex flex-col justify-center items-center h-[120vh] w-screen">
      <form className="flex flex-col  gap-6 items-center border h-[100%] w-[100%] bg-red-300 rounded-sm shadow-sm">
        <h1 className="text-center mt-10 ">Login</h1>
        <input
          type="text"
          placeholder="First Name"
          // onChange={""}
          className="h-[5%] w-[70%] rounded p-2 outline-none  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Middle Name"
          // onChange={""}
          className="h-[5%] w-[70%] rounded p-2 outline-none  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          // onChange={""}
          className="h-[5%] w-[70%] rounded p-2 outline-none  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Moble Number"
          // onChange={""}
          className="h-[5%] w-[70%] rounded p-2 outline-none  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="First Name"
          // onChange={""}
          className="h-[5%] w-[70%] rounded p-2 outline-none  focus:border-red-200"
        />
      </form>
    </div>
  );
}

export default Login
