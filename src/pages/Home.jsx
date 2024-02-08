import React from 'react'
import NewCustomer from './NewCustomer'

const Home = () => {
  return (
    <div className=" ">
      <div className="h-[10vh] bg-white  static">Nav</div>
      Home
      <div className="h-[100vh]"><NewCustomer/></div>
      <div className="h-[50vh] bg-green-200">Footer</div>
    </div>
  );
}

export default Home
