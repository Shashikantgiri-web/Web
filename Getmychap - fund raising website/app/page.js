import React from 'react'

export default function Home() {
  return (
    <>
      <div className='w-[99%] h-[44vh] flex flex-col justify-center items-center gap-1'>
        <div className=' text-white font-bold text-4xl flex flex-row justify-center items-center gap-2'>
          <p className='h-[99%] flex justify-center items-center'>Buy me a chai!</p>
          <span className='h-[99%] flex justify-center items-center'>
            <img src="/images/tea.gif" alt="images not found" className='w-[50px] h-[50px]'/>
          </span>
        </div>
        <p className=' text-gray-300 font-medium text-center w-[60%]'>
          A crowdfunding platform for creators. Get funded by your fans and supporters. Start now !
        </p>
        <div className="flex flex-row gap-4 justify-center items-center p-4">
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 p-0.5">Start here</button>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 p-0.5">Read more</button>
        </div>
      </div>
      <div className='w-screen h-1 bg-white opacity-10'></div>
      <div className='w-[99%] h-[50vh] flex flex-col justify-center items-center gap-1'>
        <div className='w-[99%] h-[10vh] flex justify-center items-center'>
          <p className='text-white text-2xl font-bold'>Your Fans can buy a Chai</p>
        </div>
        <div className='w-[99%] h-[35vh] flex flex-row justify-center items-center gap-2.5'>
          <div className='w-[32%] h-[99%] flex flex-col justify-center items-center'>
            <div className='h-[14vh] w-[99%] flex flex-col justify-center items-center'>
              <img src="/images/man.gif" alt="images not found" className='bg-slate-400 rounded-full p-2.5 w-[70px] h-[70px]' />
              <p className='text-white text-lg font-semibold'>Support your Creator</p>
            </div>
            <div className='h-[14vh] w-[99%] flex justify-center items-center'>
              <p className='text-white text-[15px] font-semibold text-center'>Support your Creator by engaging with their content, sharing it, and providing feedback to encourage growth</p>
            </div>
          </div>
          <div className='w-[32%] h-[99%] flex flex-col justify-center items-center'>
            <div className='h-[14vh] w-[99%] flex flex-col justify-center items-center'>
              <img src="/images/coin.gif" alt="images not found" className='bg-slate-400 rounded-full p-2.5 w-[70px] h-[70px]' />
              <p className='text-white text-lg font-semibold'>Fund Yourself</p>
            </div>
            <div className='h-[14vh] w-[99%] flex justify-center items-center'>
              <p className='text-white text-[15px] font-semibold text-center'>Fund Yourself: Empower your financial independence by investing wisely and taking control of your future.</p>
            </div>
          </div>
          <div className='w-[32%] h-[99%] flex flex-col justify-center items-center'>
            <div className='h-[14vh] w-[99%] flex flex-col justify-center items-center'>
              <img src="/images/group.gif" alt="images not found" className='bg-slate-400 rounded-full p-2.5 w-[70px] h-[70px]' />
              <p className='text-white text-lg font-semibold'>Fans want to help</p>
            </div>
            <div className='h-[14vh] w-[99%] flex justify-center items-center'>
              <p className='text-white text-[15px] font-semibold text-center'>Fans eagerly step up to support, showing their dedication and passion for their favorite individual or team.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen h-1 bg-white opacity-10'></div>
      <div className='w-[99%] h-[50vh] flex flex-col justify-center items-center gap-1'>
        <div className='w-[99%] h-[10vh] flex justify-center items-center'>
          <p className='text-white text-2xl font-bold'>Learn more about us</p>
        </div>
        <div className='w-[99%] h-[40vh] flex flex-row justify-center items-center gap-2.5'>
          <div className='w-[48%] h-[99%] flex justify-center items-center'>
            <iframe src="https://www.youtube.com/embed/6v1vJGZ5IQk?si=oEDMnp9AYdYK2MS_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-[99%] h-[99%]'></iframe>
          </div>
        </div>
      </div>
      <div className='w-screen h-1 bg-white opacity-10'></div>
    </>
  );
}
