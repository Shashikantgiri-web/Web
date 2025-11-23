import React from 'react'
import '../App.css'

const backbutton = ({ setActiveComponent }) => {
    return (
        <div className='w-[99%] h-auto min-h-[80px] flex justify-start items-center p-2.5
                        opacity-0 animate-[slideInLeft_0.5s_ease-out_0.1s_forwards]'>
            <button 
                onClick={() => setActiveComponent("back")} 
                className='w-[40%] sm:w-[30%] md:w-[20%] h-[60px] flex flex-row justify-start items-center p-[4px] gap-2.5 
                           border border-[#00000033] rounded-[8px] 
                           transform transition-all duration-300
                           hover:shadow-lg hover:bg-[#F5F5F5FF] hover:scale-105 hover:border-purple-400
                           active:scale-95'
            >
                <img src="./back_arrow.svg" alt="" className='w-6 pl-1.5 transform transition-transform duration-300 group-hover:-translate-x-1' />
                <span className='font-medium'>back</span>
            </button>
        </div>
    )
}

export default backbutton