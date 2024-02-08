import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../slice/DataFetchSlice'

const Home = () => {
  const dispatch = useDispatch()
  const users= useSelector(state=>state.dataFetch.user)

  useEffect(()=>{
    dispatch(fetchData())
  },[])
console.log(users);
return (
  <div className="p-4 flex flex-col justify-center items-center">
    {users.length === 0 ? (
      <h1 className=" text-red-500">No User Data Found</h1>
    ) : (
      <div>
        {users.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <label className="flex gap-2 mt-3">
              First Name :
              <input
                type="text"
                value={item.firstName}
                disabled
                className="outline-none border rounded pl-2 pt-1 pb-1 pr-1"
              />
            </label>
            <label className="flex gap-2 mt-3">
              Middle Name :
              <input
                type="text"
                value={item.middleName}
                disabled
                className="outline-none border rounded pl-2 pt-1 pb-1 pr-1"
              />
            </label>
            <label className="flex gap-2 mt-3">
              Last Name :
              <input
                type="text"
                value={item.lastName}
                disabled
                className="outline-none border rounded pl-2 pt-1 pb-1 pr-1"
              />
            </label>
            <label className="flex gap-2 mt-3">
              Email :
              <input
                type="text"
                value={item.email}
                disabled
                className="outline-none border rounded pl-2 pt-1 pb-1 pr-1"
              />
            </label>
            <label className="flex gap-2 mt-3">
              Date of Birth :
              <input
                type="text"
                value={item.dateOfBirth}
                disabled
                className="outline-none border rounded pl-2 pt-1 pb-1 pr-1"
              />
            </label>
            <label className="flex gap-2 mt-3">
              Mobile :
              <input
                type="text"
                value={item.mobile}
                disabled
                className="outline-none border rounded pl-2 pt-1 pb-1 pr-1"
              />
            </label>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Home
