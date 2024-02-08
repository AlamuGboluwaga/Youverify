import React from 'react'

const NewCustomer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[120vh] w-screen">
      <form className="flex flex-col  gap-6 items-center border h-[100%] w-[100%] bg-pink-00 rounded-sm shadow-sm">
        <h1 className="text-center mt-10 ">Login</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Middle Name"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border focus: focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="Moble Number"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="text"
          placeholder="B V N"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={""}
          required
          className="h-[5%] w-[70%] rounded pl-4 outline-none border  focus:border-red-200"
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={""}
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
