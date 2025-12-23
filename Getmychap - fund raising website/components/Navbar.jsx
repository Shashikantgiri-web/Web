"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import Github from 'next-auth/providers/github'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowDropdown] = useState(false);
  return (
    <div className='w-screen h-[10vh] flex items-center justify-center bg-gray-900'>
      <div className='w-[30%] h-[99%] flex flex-row items-center justify-start'>
        <Link href="/" className='flex flex-row items-center justify-start'>
          <span className='w-[30%] h-[99%] flex justify-end items-center'>
            <img src="/images/tea.gif" alt="images not found" className='w-[50px] h-[50px] pb-1.5' />
          </span>
          <p className=' text-white font-bold text-2xl'>Getmychai</p>
        </Link>
      </div>
      <div className='w-[70%] h-[99%] flex items-center justify-end'>
        <ul className='w-[99%] md:w-[80%] h-[99%] flex items-center justify-around text-white '>
          <Link href="/"><li className='hover:text-purple-200 hover:text-lg transition-all duration-150 ease-in-out'>Home</li></Link>
          <Link href="/"><li className='hover:text-purple-200 hover:text-lg transition-all duration-150 ease-in-out'>About</li></Link>
          <Link href="/"><li className='hover:text-purple-200 hover:text-lg transition-all duration-150 ease-in-out'>Contact</li></Link>
          <li className='relative'>{session && <>
            <button id="dropdownHoverButton" onClick={() => { setShowDropdown(!showdropdown) }} onBlur={()=>{setTimeout(()=>{setShowDropdown(false)},300)}} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="flex justify-center items-center text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 p-0.5" type="button">
              Welcome {session.user.email}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </button>
            <div id="dropdownHover" className={`z-10 ${showdropdown ? '' : 'hidden'} absolute right-0 flex justify-center items-center text-white bg-gray-900 shadow-xs shadow-blue-700 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5 p-0.5 mt-2.5`}>
              <ul className="w-[130px] text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">
                <li className="hover:bg-blue-800 hover:text-white rounded-2xl w-[95%] h-[10%] p-2 flex items-center justify-center">
                  <Link href="/dashboard" className=" text-white">Dashboard</Link>
                </li>
                <li className="hover:bg-blue-800 hover:text-white rounded-2xl w-[95%] h-[10%] p-2 flex items-center justify-center">
                  <Link href="#" className=" text-white">Your Page</Link>
                </li>
                <li className="hover:bg-blue-800 hover:text-white rounded-2xl w-[95%] h-[10%] p-2 flex items-center justify-center" onClick={() => { signOut() }}>
                  <Link href="#" className=" text-white">Log out</Link>
                </li>
              </ul>
            </div>
          </>}</li>
          <li>{!session && <Link href="/signin"><button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 p-0.5">Signin</button></Link>}</li>
          <li>{!session && <Link href="/login"><button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 p-0.5">Login</button></Link>}</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar   