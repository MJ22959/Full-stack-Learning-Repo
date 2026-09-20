import { useState } from 'react'

const counter = () => {
  const  [count, setCount]=useState(0);

  function increment(){
    setCount(count + 1);
   }

  function decrement(){
    setCount(count - 1);
    if(count<=0){
      setCount(0);
    }
  }
  console.log(count);
  return (
    <div className='bg-slate-400 shadow-lg h-screen gap-5 flex items-center flex-col justify-center'>
      <h1>Counter</h1>
      <div className='flex items-center gap-4'>
        <button className='bg-green-500 cursor-pointer py-2 px-4 hover:bg-gray-700 shadow-md rounded-md font-bold' onClick={decrement}>-</button>
        <h2>{count}</h2>
        <button className='bg-green-500 cursor-pointer py-2 px-4 hover:bg-gray-700 shadow-md rounded-md font-bold' onClick={increment}>+</button>
        </div> 
    </div>
  )
}

export default counter