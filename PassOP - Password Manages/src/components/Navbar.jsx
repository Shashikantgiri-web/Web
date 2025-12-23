import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <nav className='w-screen h-[10vh] bg-indigo-400 flex flex-row items-center justify-between p-2'>
      <div className='w-[40%] sm:w-[60%] h-full flex items-center justify-start p-1'>
        <h1 className='text-2xl font-semibold hover:font-bold transition-all duration-300'>
          <span className='text-indigo-700'>&lt;</span><span className='text-white'>Pass</span><span className='text-indigo-700'>OP/&gt;</span>
        </h1>
      </div>
      <div className='w-[60%] sm:w-[40%] h-full flex items-center justify-center p-1'>
        <ul className='w-[99%] h-full flex flex-row items-center justify-center gap-6 p-0.5 text-white font-semibold text-lg'>
          <li><a href="/" className='text-2xl text-white shadow-2xl hover:text-indigo-200'>Home</a></li>
          <li><a href="/" className='text-2xl text-white shadow-2xl hover:text-indigo-200'>About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar