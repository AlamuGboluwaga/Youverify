import React, { useState ,useEffect} from 'react'
import axios from 'axios';

const api = import.meta.env.VITE_API;

const DataPage = () => {

     const [data, setdata] = useState([])

     const fetchData = async () => {
       try {
         const response = await axios.get(`${api}`);
         setdata(response?.data);
       } catch (error) {
         console.error(error.message);
       }
     };
     useEffect(() => {
       fetchData();
     },[]);
  return (
    <div className='className="bg-green-30 h-screen w-screen p-4 flex flex-col gap-10'>
      <h1 className="text-center">Data Page</h1>
      {data.length === 0 ? (
        <p className="text-center">Data is Empty</p>
      ) : (
        <>
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <p> Id : {item.id}</p>
              <label>
                Name :
                <input
                  type="text"
                  value={item.firstName}
                  className="border"
                  disabled
                />
              </label>
              <label>
                Middle Name :
                <input
                  type="text"
                  value={item.middleName}
                  className="border"
                  disabled
                />
              </label>
              <label>
                Last Name :
                <input
                  type="text"
                  value={item.lastName}
                  className="border"
                  disabled
                />
              </label>
              <label>
                Email :
                <input
                  type="text"
                  value={item.email}
                  className="border"
                  disabled
                />
              </label>
              <label>
                Mobile:
                <input
                  type="text"
                  value={item.mobile}
                  className="border"
                  disabled
                />
              </label>
              <label>
                Date of Birth :
                <input
                  type="text"
                  value={item.dateOfBirth}
                  className="border"
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
