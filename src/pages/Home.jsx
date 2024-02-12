import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
const data = JSON.parse(localStorage.getItem("dataState"));
console.log(data);
return (
    <div>
    <div>Welcome , {data.map((item,index)=>(
      <div key={index}>
      {item.firstName}
      </div>
    ))}</div>
      Home

    </div>
  )
}

export default Home
