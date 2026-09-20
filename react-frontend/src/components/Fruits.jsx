import { useState } from 'react'

const Fruits = () => {
    const [fruits, setFruits] = useState(['apple','banana']);
  function addFruit(){
    setFruits(['mangoes','strawberry']);
  }
    return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold'>Fruits Lists</h1>
        <ul>
          {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
        </ul>
        <button className='bg-red-500 cursor-pointer py-4 px-4 hover:bg-green-700 shadow-md rounded-md font-bold'onClick={addFruit} > Add new fruits</button>
    </div>
  )
}

export default Fruits