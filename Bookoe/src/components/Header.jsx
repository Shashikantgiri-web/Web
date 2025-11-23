import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Header = () => {
  return (
    <header className="w-full max-w-full h-[70px] flex flex-row justify-center items-center 
                       bg-white shadow-sm fixed top-0 left-0 right-0 z-50
                       opacity-0 animate-[slideInLeft_0.6s_ease-out_0.1s_forwards]">
        <div className='w-[20%] sm:w-[35%] md:w-[40vw] h-[99%] flex flex-row justify-start items-center gap-[3px]'>
          <div className='w-[60%] sm:w-[30px] h-[30px] ml-[10px] sm:ml-[20px] flex justify-center items-center
                          transform transition-all duration-300 hover:scale-110 hover:rotate-12'>
            <img src="/logo.svg" className="w-[99%] h-[99%]" alt="logo" />
          </div>
          <h2 className='text-[23px] font-bold text-[#7B61FFFF] hidden sm:flex
                         transform transition-all duration-300 hover:scale-105'>Bookoe</h2>
        </div>
        <div className='w-[80%] md:w-[60vw] h-[99%] flex flex-row justify-between items-center'>
          <div className='w-[85%] sm:w-[70%] md:w-[50%] h-[99%] flex justify-center items-center'>
            <ul className='w-[99%] h-[99%] flex flex-row justify-around items-center list-none text-[11px] sm:text-[15px] font-medium text-[#565D6DFF]'>
              <li className='transform transition-all duration-200 hover:scale-110'>
                <NavLink 
                  to="/" 
                  className={(e)=>{return e.isActive?"text-purple-700 font-bold text-[18px] transition-all duration-200":"text-[#565D6DFF] transition-all duration-200 hover:text-purple-600"}}
                > 
                  Home 
                </NavLink>
              </li>
              <li className='transform transition-all duration-200 hover:scale-110'>
                <NavLink 
                  to="/Categories" 
                  className={(e)=>{return e.isActive?"text-purple-700 font-bold text-[18px] transition-all duration-200":"text-[#565D6DFF] transition-all duration-200 hover:text-purple-600"}}
                > 
                  Categories 
                </NavLink>
              </li>
              <li className='transform transition-all duration-200 hover:scale-110'>
                <NavLink 
                  to="/New" 
                  className={(e)=>{return e.isActive?"text-purple-700 font-bold text-[18px] transition-all duration-200":"text-[#565D6DFF] transition-all duration-200 hover:text-purple-600"}}
                > 
                  New Arrivals 
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='w-[15%] sm:w-[30%] md:w-[50%] h-[99%] flex justify-center items-center'>
            <div className='w-[80%] h-[60%] p-[5px] border-4 sm:border border-[#DEE1E6FF] rounded-2xl sm:rounded bg-gray-100 sm:bg-transparent 
                            flex flex-row justify-start items-center gap-[5px]
                            transform transition-all duration-300 hover:border-purple-400 hover:shadow-md focus-within:border-purple-600 focus-within:shadow-lg'>
              <div className='w-[90%] sm:w-[10%] md:w-[10%] h-[99%] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110' viewBox="0 0 30 30">
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder='Search' 
                className='w-[90%] h-[80%] bg-transparent hidden sm:flex outline-none text-[14px] font-normal text-[#7b61ff] placeholder:text-[#00000099] transition-all duration-200' 
              />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header   