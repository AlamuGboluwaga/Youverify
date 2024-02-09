import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const NewCustomer = () => {
  // const userState = useSelector(state=>state.user)
  // const dispatch =useDispatch()
const [user, setUser] = useState({
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
  dob: "",
  bvn: "",
  password: "",
});
console.log(user);

  return (
    <div className="flex flex-col justify-center items-center h-[120vh] w-screen">
      <form className="flex flex-col  gap-6 items-center border h-[100%] w-[100%] bg-pink-00 rounded-sm shadow-sm">
        <h1 className="text-center mt-10 ">Login</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Middle Name"
          onChange={(e) => setUser({ ...user, middleName: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border focus: focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Moble Number"
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="B V N"
          onChange={(e) => setUser({ ...user, bvn: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setUser({ ...user, confirmName: e.target.value })}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <button className="bg-green-400 text-white h-[5%] w-[70%] active:bg-green-300 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCustomer
