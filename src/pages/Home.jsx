import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../slice/DataFetchSlice'

const Home = () => {
  const dispatch = useDispatch()
  const user= useSelector(state=>state.dataFetch)

  useEffect(()=>{
    dispatch(fetchData())
  },[])
console.log(user);
return (
    <div className='h-[100vh] bg-yellow-300'>
      {user.map(item=>(
        <>
        {item.firstName}
        </>
      ))}
    </div>
  )
}

export default Home
