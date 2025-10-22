import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if (to) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])
  

  const saveTODO = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newtodos)
    saveTODO()
  }
  const handlecheck = (e) => {
    let id = e.target.name
    console.log(id)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(index)
    let newtodos = [...todos]
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    settodos(newtodos)
    saveTODO()
  }
  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newtodos)
    saveTODO()
  }
  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    console.log(todos)
    saveTODO()
  }
  const handlechange = (e) => {
    settodo(e.target.value)
  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-purple-900 flex flex-col justify-center items-center gap-[10px]'>
        <Header />
        <div className="w-[80vw] h-[85vh] bg-purple-600 flex flex-col justify-center items-center rounded-[16px] shadow-2xl shadow-gray-500">
          <div className='w-[99%] h-[30%] flex flex-col justify-center items-center gap-2.5'>
            <h3 className='w-[80%] h-[20%] flex justify-center items-center font-bold text-3xl text-white'>Add Todo</h3>
            <input type="text" name="todo" id="todo" onChange={handlechange} value={todo} className='w-[80%] h-[40px] bg-transparent border-2 border-gray-800 flex justify-center items-center rounded-3xl pl-4 text-white' />
            <button type="submit" className='w-[15%] h-[45px] p-[5px] flex justify-center items-center border-none bg-blue-400 rounded-2xl text-white' onClick={handleAdd}>Save</button>
          </div>
          <div className='w-[99%] h-[68%] flex flex-col justify-start items-center'>
            {todos.length === 0 && <div className='w-[80%] h-[80px] flex flex-row justify-center items-center p-[10px] bg-purple-700 rounded-3xl mb-1'><p className="text-white italic text-lg">Sorry no TO-DO was Add</p></div>}
            {todos.map(item => {
              return (<div key={item.id} className='w-[80%] h-[80px] flex flex-row justify-center items-center p-[10px] bg-purple-700 rounded-3xl mb-1'>
                <div className='w-[10%] h-[99%] flex justify-center items-center'>
                  <input type="checkbox" name={item.id} id="" value={item.isCompleted} onChange={handlecheck} className='w-[30%] h-[30%] border-black border-2 bg-white' />
                </div>
                <div className='w-[55%] h-[99%] flex justify-start items-center'>
                  <p className={item.isCompleted ? "line-through" : "text-white italic text-lg"}>{item.todo}</p>
                </div>
                <div className='w-[35%] h-[99%] flex flex-row justify-center items-center gap-3.5'>
                  <button className='w-[30%] h-[80%] flex justify-center items-center bg-blue-400 border-none text-white rounded-2xl' onClick={(e) => handleEdit(e, item.id)}>edit</button>
                  <button className='w-[30%] h-[80%] flex justify-center items-center bg-blue-400 border-none text-white rounded-2xl' onClick={(e) => { handleDelete(e, item.id) }}>delete</button>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
