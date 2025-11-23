import React from 'react'
import "../App.css"

const New = () => {
  return (
    <div className='w-full max-w-4xl h-auto min-h-[40vh] flex justify-center items-center 
                    bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl 
                    text-gray-600 text-2xl italic mx-auto my-8 p-8
                    opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]
                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
      <p className='transform transition-all duration-300 hover:scale-110'>
        No new books has arrivals
      </p>
    </div>
  )
}

export default New  