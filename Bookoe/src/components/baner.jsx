import React from 'react'

const Baner = () => {
  return (
    <div className='w-[99vw] h-[750px] bg-[#F2F0FFFF] flex flex-row justify-center items-center gap-[10px]'>
      <div className='w=[80%] sm:w-[60%] h-[60%] sm:h-[55%] md:h-[50%] flex flex-col justify-start items-center sm:items-end gap-[5px]'>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] h-[10%] sm:h-[5%] flex justify-start items-center text-sm'>
          <p>
            📚 READ WITHOUT LIMITS
          </p>
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] min-h-[20%] max-h-[30%] sm:h-[30%] flex flex-col justify-start items-center font-bold'>
          <h1 className='w-full h-full flex flex-col justify-start items-start text-3xl gap-[5px]'>
            Enjoy Free Access to PDFs
            <p className='text-purple-800'>No Sign-In Needed</p>
          </h1>
          {/* <h1 className='w-full h-[50%] flex flex-row justify-start items-center text-3xl gap-[5px]'>          
            for our student commune it
          </h1> */}
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] h-[36%] sm:h-[45%] flex flex-col justify-start items-center font-Roboto text-[#565D6DFF]'>
          <p className='text-[18px] p-[10px]'>
           Explore thousands of PDFs books, study materials, and notes all free to read and download instantly. No registration, no restrictions just pure knowledge at your fingertips.
          </p>
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[70%] h-[20%] flex flex-row justify-start items-center'>
          <div className='w-[40%] sm-[43%] md:w-[35%] h-full flex justify-center items-center'>
            <button className='w-[90%] h-[60%] border-none text-white bg-[#7B61FFFF] hover:bg-[#451FFFFF] p-[5px] rounded-2xl flex justify-center items-center'>
              <a href="./Temp_files.pdf">Start Reading</a>
            </button>
          </div>
          <div className='w-[55%] sm:w-[56%] md:w-[45%] h-full flex justify-center items-center '>
            <button className='w-[90%] h-[60%] border-2 border-[#7B61FFFF] bg-white text-purple-800 px-[10px] rounded-2xl hover:bg-[#FFFFFFFF] hover:text-[#7B61FFFF] flex justify-center items-center'>
              <a href="#main">
              Browse Collections
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='w-[40%] h-[340px] hidden sm:flex flex-col justify-start items-start overflow-hidden' style={{borderRadius: '100px 0px 0px 100px'}}>
        <div className='h-full'>
          <img className='h-full w-[90%]' src="/baner_img.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Baner