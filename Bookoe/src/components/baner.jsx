import React from 'react'

const Baner = () => {
  return (
    <div className='w-full max-w-full h-auto min-h-[750px] bg-[#F2F0FFFF] flex flex-row justify-center items-center gap-[10px] py-8'>
      <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-start items-center sm:items-end gap-[5px]
                      opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]'>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] h-auto py-2 flex justify-start items-center text-sm
                         transform transition-all duration-300 hover:translate-x-2'>
          <p className='font-semibold text-purple-600'>
            📚 READ WITHOUT LIMITS
          </p>
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] min-h-[20%] max-h-[30%] sm:h-auto py-4 flex flex-col justify-start items-center font-bold'>
          <h1 className='w-full h-full flex flex-col justify-start items-start text-3xl gap-[5px]
                         transform transition-all duration-300 hover:scale-105'>
            <span className='opacity-0 animate-[fadeIn_0.8s_ease-out_0.5s_forwards]'>Enjoy Free Access to PDFs</span>
            <p className='text-purple-800 opacity-0 animate-[fadeIn_0.8s_ease-out_0.7s_forwards]'>No Sign-In Needed</p>
          </h1>
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] h-auto py-4 flex flex-col justify-start items-center font-Roboto text-[#565D6DFF]
                        opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]'>
          <p className='text-[18px] p-[10px]'>
           Explore thousands of PDFs books, study materials, and notes all free to read and download instantly. No registration, no restrictions just pure knowledge at your fingertips.
          </p>
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] h-auto py-4 flex flex-row justify-start items-center gap-4
                        opacity-0 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]'>
          <div className='w-[40%] sm:w-[43%] md:w-[35%] h-full flex justify-center items-center'>
            <button className='w-[90%] h-[60px] border-none text-white bg-[#7B61FFFF] p-[5px] rounded-2xl 
                               flex justify-center items-center
                               transform transition-all duration-300 
                               hover:bg-[#451FFFFF] hover:scale-110 hover:shadow-xl
                               active:scale-95'>
              <a href="./Temp_files.pdf" className='w-full h-full flex justify-center items-center'>Start Reading</a>
            </button>
          </div>
          <div className='w-[55%] sm:w-[56%] md:w-[45%] h-full flex justify-center items-center'>
            <button className='w-[90%] h-[60px] border-2 border-[#7B61FFFF] bg-white text-purple-800 px-[10px] rounded-2xl 
                               flex justify-center items-center
                               transform transition-all duration-300
                               hover:bg-purple-50 hover:text-[#7B61FFFF] hover:scale-110 hover:shadow-xl
                               active:scale-95'>
              <a href="#main" className='w-full h-full flex justify-center items-center'>
                Browse Collections
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[40%] h-[340px] hidden sm:flex flex-col justify-start items-start overflow-hidden 
                      opacity-0 animate-[slideInRight_0.8s_ease-out_0.4s_forwards]' 
           style={{borderRadius: '100px 0px 0px 100px'}}>
        <div className='h-full w-full transform transition-transform duration-500 hover:scale-110'>
          <img className='h-full w-[90%] object-cover' src="/baner_img.jpg" alt="Banner" />
        </div>
      </div>
    </div>
  )
}

export default Baner