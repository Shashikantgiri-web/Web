import React from 'react'
import '../App.css'

const header = () => {
  return (
    <div className='w-[99%] h-[10vh] flex flex-row justify-center items-center'>
        <div className='w-[50%] h-[100%] flex justify-center items-center'>
            <h2 className='text-white font-bold text-[19px] sm:text-[29px] italic'>TO-DO LIST APP</h2>
        </div>
        <div className='w-[50%] h-[100%] flex flex-row justify-center items-center'>
            <ul className='w-[99%] h-[100%] flex flex-row justify-center items-center'>
                <li className='text-white font-semibold text-lg mx-4 cursor-pointer hover:underline'>Home</li>
                <li className='text-white font-semibold text-lg mx-4 cursor-pointer hover:underline'>List</li>
            </ul>
        </div>
    </div>
  )
}

export default header   