import {useState} from "react";

const todo = () => {
    const [list,setLists] = useState(["Task1","Task2"]);
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex item-center gap-5'>
            <label> Enter the To-do Lists to add:           
            <input
                 className="border rounded-mx px-2 py-2"
                 type='text' 
                 value={list}/>
            </label>
            <button onClick={() => {setLists([...list, document.querySelector("input")]

            )}}
            <p>Previous recorded List: {list} </p>
        </div>
    </div>
    </>
   
  )
}

export default todo