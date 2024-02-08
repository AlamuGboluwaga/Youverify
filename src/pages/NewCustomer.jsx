import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const NewCustomer = () => {
  // const dispatch =useDispatch()
  // const customer = useSelector()
  const [user,setUser]= useState({
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    mobile:"",
    dateOfBirth:"",
    bvn:"",
    password:""

  })
  console.log("USER",user);
  return (
    <div className="bg-green-50 flex flex-col justify-center items-center gap-4 h-[120vh] w-screen">
      <form className="flex flex-col justify-center items-center gap-6 bg-blac h-full w-full rounded shadow-lg border">
        <div className="flex flex-col justify-center items-center mt-1">
          <h1 className="text-or text-fuchsia-500 "> New Customer</h1>
        </div>
        <input
          type="text"
          placeholder="First Name"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Middle Name"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, middleName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, lasttName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
        />
        <input
          type="text"
          placeholder="B V N"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, bvn: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border outline-none focus:border-blue-300 rounded h-[6%] w-[80%] pl-4 pt-1 pb-1 pr-1"
          required
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        />
        <button className="bg-green-500 rounded h-[6%] w-[80%] text-white active:bg-green-400">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCustomer
