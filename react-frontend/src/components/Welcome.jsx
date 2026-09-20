import { useState } from "react";


const Welcome =({name,newName: newNameValue}) => {
  const [namea,changeName] = useState(name);

  function newName(){
    changeName(newNameValue);
  }

  return (
    <div>
      <h1>Welcome to React</h1>
      <h2>{namea}</h2>
      <button className="bg-red-500 cursor-pointer py-4 px-4 hover:bg-gray-700 shadow-md rounded-md font-bold" onClick={newName}>Change New Name</button>
    </div>
  )
}

export default Welcome;