import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import List from './components/list.jsx';

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Header /><Home/></>
    },
    {
      path:"/home",
      element:<><Header /><Home/></>
    },
    {
      path:"/list",
      element:<><Header /><List /></>
    }
  ])

  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-purple-900 flex flex-col justify-center items-center gap-[10px]'>
        {/* <Header /> */}
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
