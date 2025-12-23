import React from 'react'

const UserName = async ({ params }) => {
  const { username } = await params
  return (
    <div>
      <>
        <div className='w-screen h-[350px] flex justify-center items-center relative'>
          <img src="/images/cover.jpg" alt="bg_img" className='object-cover w-full h-full z-[-1]' />
          <img src="/images/profile.jpg" alt="profile_img" className='w-22 h-22 rounded-full absolute -bottom-10 ring-4 ring-blue-500/50 shadow-2xl shadow-blue-700 z-1' />
        </div>
        <div className='w-screen flex flex-col justify-center items-center gap-1 mt-13 mb-2.5'>
          <p className='w-[99%] h-[30px] flex justify-center items-center text-lg font-bold hover:text-[20px] hover:text-blue-600 transition-all duration-200'>@{username}</p>
          <p className='w-[99%] h-[30px] flex justify-center items-center text-sm text-slate-500'>@Bio__</p>
          <p className='w-[99%] h-[30px] flex justify-center items-center text-sm text-slate-500'>_ Payments | ₹_ Raised</p>
        </div>
        <div className='w-screen h-[400px] flex flex-row justify-center items-center p-[1%] gap-4'>
          <div className='w-[48%] h-[99%] flex flex-col justify-start items-center p-1 bg-gray-900 rounded-2xl shadow-xs shadow-blue-700'>
            <p className='w-[99%] h-[15%] text-lg font-bold flex justify-center items-center'>Supporters list</p>
            <ul className='w-[99%] h-[84%] flex flex-col justify-start items-start gap-1.5 pl-2 pt-0.5'>
              <li className='text-slate-400 text-[15px] hover:text-white pl-1.5'>@{username} donated $_.00 with a message "........"</li>
              <li className='text-slate-400 text-[15px] hover:text-white pl-1.5'>@{username} donated $_.00 with a message "........"</li>
              <li className='text-slate-400 text-[15px] hover:text-white pl-1.5'>@{username} donated $_.00 with a message "........"</li>
              <li className='text-slate-400 text-[15px] hover:text-white pl-1.5'>@{username} donated $_.00 with a message "........"</li>
              <li className='text-slate-400 text-[15px] hover:text-white pl-1.5'>@{username} donated $_.00 with a message "........"</li>
              <li className='text-slate-400 text-[15px] hover:text-white pl-1.5'>@{username} donated $_.00 with a message "........"</li>
            </ul>
          </div>
          <div className='w-[48%] h-[99%] flex flex-col justify-center items-center p-1 bg-gray-900 rounded-2xl shadow-xs shadow-blue-700'>
            <div className='w-full h-[15%] flex justify-center items-center'>
              <p className='text-lg font-bold'>Make Payment</p>
            </div>
            <div className='w-full h-[84%] flex flex-col justify-center items-center gap-1.5 p-1'>
              <div className='w-full h-[20%] flex justify-center items-center'>
                <input type="text" name="Nmae" id="" placeholder='Enter you Name' className='w-[90%] h-[80%] flex justify-start items-center p-1.5 pl-2 rounded-lg bg-blue-950 hover:ring-1 hover:ring-blue-700 text-white'/>
              </div>
              <div className='w-full h-[20%] flex justify-center items-center'>
                <input type="text" name="Message" id="" placeholder='Enter you message' className='w-[90%] h-[80%] flex justify-start items-center p-1.5 pl-2 rounded-lg bg-blue-950 hover:ring-1 hover:ring-blue-700 text-white'/>
              </div>
              <div className='w-full h-[20%] flex justify-center items-center'>
                <input type="text" name="Amount" id="" placeholder='Enter you amount' className='w-[90%] h-[80%] flex justify-start items-center p-1.5 pl-2 rounded-lg bg-blue-950 hover:ring-1 hover:ring-blue-700 text-white'/>
              </div>
              <div className='w-full h-[20%] flex justify-center items-center'>
                <button type="submit" className='w-[90%] h-[80%] flex justify-center items-center font-semibold text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-4 py-2.5 leading-5 p-0.5'>Pay</button>
              </div>
              <div className='w-[90%] h-[20%] flex flex-row justify-start items-center gap-1.5'>
                <button type="submit" className='w-[100px] h-[80%] flex flex-row justify-center items-center p-1.5 bg-blue-950 rounded-lg '>Pay $10</button>
                <button type="submit" className='w-[100px] h-[80%] flex flex-row justify-center items-center p-1.5 bg-blue-950 rounded-lg '>Pay $20</button>
                <button type="submit" className='w-[100px] h-[80%] flex flex-row justify-center items-center p-1.5 bg-blue-950 rounded-lg '>Pay $30</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default UserName 