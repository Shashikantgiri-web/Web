import React, { useState, useEffect } from 'react'
import "../App.css"

const list = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    let todosString = localStorage.getItem("todos");
    if (todosString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);
  
  return (
    <div className=" w-[99vw] sm:w-[80vw] h-[85vh] bg-purple-600 flex flex-col justify-center items-center rounded-[16px] shadow-2xl shadow-gray-500">
        <div className='w-[99%] h-[68%] flex flex-col justify-start items-center overflow-y-scroll'>
            {todos.length === 0 && <div className='w-[80%] h-[80px] flex flex-row justify-center items-center p-[10px] bg-purple-700 rounded-3xl mb-1'><p className="text-white italic text-lg">Sorry no TO-DO was Add</p></div>}
            {todos.map(item => {
                return (<div key={item.id} className='w-[80%] h-[80px] flex flex-row justify-center items-center p-[10px] bg-purple-700 rounded-3xl mb-1'>
                    <div className='w-[10%] h-[99%] flex justify-center items-center'>
                        <input type="checkbox" name={item.id} id="" checked={item.isCompleted} readOnly className='w-[60%]  h-[60%] sm:w-[40%] md:w-[40%] border-black border-2 bg-white' />
                    </div>
                    <div className='w-[55%] h-[99%] flex justify-start items-center'>
                        <p className={item.isCompleted ? "line-through" : "text-white italic text-lg"}>{item.todo}</p>
                    </div>
                    <div className='w-[35%] h-[99%] flex flex-row justify-center items-center gap-3.5'>
                        <button className='min-w-[30%] max-w-[40%] min-h-[80%] max-h-[100%] flex justify-center items-center bg-blue-400 border-none text-white rounded-2xl p-[5px]'>
                            <img src="./edit.svg" alt="" className='sm:w-[40%] md:w-[25%]' />
                        </button>
                        <button className='min-w-[30%] max-w-[40%] min-h-[80%] max-h-[100%] flex justify-center items-center bg-blue-400 border-none text-white rounded-2xl p-[5px]'>
                            <img src="./delete.svg" alt="" className='sm:w-[40%] md:w-[25%]' />
                        </button>
                    </div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default list