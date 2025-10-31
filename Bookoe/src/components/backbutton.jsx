import React from 'react'
import '../App.css'

const backbutton = ({ setActiveComponent }) => {
    return (
        <div className='w-[99%] h-[80px] flex justify-start items-center p-2.5'>
            <button onClick={() => setActiveComponent("back")} className='w-[40%] sm:w-[30%] md:w-[20%] h-[80%] flex flex-row justify-start items-center p-[4px] gap-2.5 border border-[#00000033] rounded-[8px] hover:shadow-lg hover:bg-[#F5F5F5FF]'>
                <img src="./back_arrow.svg" alt="" className='w-6 pl-1.5' />
                back
            </button>
        </div>
    )
}

export default backbutton