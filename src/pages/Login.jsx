import React, { useState } from 'react'
import { containerStyle } from '../componenets/Components'
import axios from 'axios'

const api = import.meta.env.VITE_API;

//   const url = import.meta.env.VITE_URL;


const Login = () => {
    const [user,setUser]=useState({
        name:'',
        email:'',
        mobile:'',
        password:"",
        confirmPassword:""
    })

  
 console.log("p ==",user.password);
console.log("C ==",user.confirmPassword)

const handleSubmit = async()=>{
    try {
        if(user.password  !== user.confirmPassword){
         console.log("password does not macth");
        }else {
            const response = await axios.post(`${api}`, user);
            if (response.status == 200) {
              console.log("Login Successfull", response.data);
            } else {
              console.log("Login Failed !!!", response.data);
            }
        }
        
    } catch (error) {
        console.error('Error during login',error.message);
    }

 
}

    // console.log("USER",user);
  return (
    <div className={containerStyle}>
      <form className="flex flex-col gap-6 border rounded p-4 ">
        <div>
          <h3 className="text-center">Login</h3>
        </div>
        <input
          className="p-2 rounded outline-none  border f focus:border-red-300"
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          className="p-2 rounded outline-none  border  focus:border-red-300"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="p-2 rounded outline-none  border  focus:border-red-300"
          type="text"
          placeholder="Mobile"
          required
          onChange={(e) => setUser({...user,mobile: e.target.value})}
        />
        <input
          className="p-2 rounded outline-none  border f focus:border-red-300"
          type=""
          placeholder="Password "
          required
          onChange={(e) => setUser({...user,password: e.target.value})}
        />
        <input
          className="p-2 rounded outline-none  border focus:border-red-300"
          type="text"
          placeholder="Confirm Password"
          required
          onChange={(e) =>{setUser({...user,confirmPassword:e.target.value})}}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 p-3 rounded text-white active:bg-green-400"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Login
