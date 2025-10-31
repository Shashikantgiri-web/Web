import React from 'react'
import "../App.css"

const footer = () => {
  return (
    <footer className='w-[99vw] h-auto sm:h-[650px] p-[8%] flex flex-col justify-center items-center gap-[10px] bg-[#F2F0FFFF]'>
        <div className='w-[99%] h-[80%] flex flex-col sm:flex-row justify-between items-end gap-[30px] sm:gap-0'>
          <div className='w-[99%] sm:w-[40%] h-[99%] flex flex-col justify-center items-center'>
            <div className='w-[99%] h-[20%] flex flex-row justify-center items-center'>
              <div className='w-[10%] h-[99%] flex justify-center items-center'>
                <img src="/logo.svg" className="w-[40px] h-[40px]" alt="logo" />
              </div>
              <div className='w-[90%] h-[99%] flex justify-start items-center'>
                <h2 className='text-[23px] font-bold text-[#7B61FFFF] pl-[5px]'>Bookoe</h2>
              </div>
            </div>
            <div className='w-[99%] h-[30%] flex justify-center items-center p-[10px] text-black text-sm'>
              <h4>FreePDFs is a simple and reliable platform where you can read and download PDFs for free no sign-in, no ads, and no limits. Access study materials, e-books, and notes anytime, anywhere.</h4>
            </div>
            <div className='w-[99%] h-[20%] flex flex-row justify-start items-center pl-[3px]'>
              <div className='w-[10%] h-[99%] flex justify-center items-center'>
                <img src="/lucide-Facebook-Outlined.svg" alt="" className='w-[20px] h-[20px] fill-[#171A1FFF]' />
              </div>
              <div className='w-[10%] h-[99%] flex justify-center items-center'>
                <img src="/lucide-Twitter-Outlined.svg" alt="" className='w-[20px] h-[20px] fill-[#171A1FFF]' />
              </div>
              <div className='w-[10%] h-[99%] flex justify-center items-center'>
                <img src="/lucide-Instagram-Outlined.svg" alt="" className='w-[20px] h-[20px] fill-[#171A1FFF]' />
              </div>
              <div className='w-[10%] h-[99%] flex justify-center items-center'>
                <img src="/lucide-Linkedin-Outlined.svg" alt="" className='w-[20px] h-[20px] fill-[#171A1FFF]' />
              </div>
              <div className='w-[10%] h-[99%] flex justify-center items-center'>
                <img src="/lucide-Youtube-Outlined.svg" alt="" className='w-[20px] h-[20px] fill-[#171A1FFF]' />
              </div>
            </div>
          </div>
          <div className='w-[99%] sm:w-[50%] h-[99%] flex flex-col sm:flex-row justify-center items-center gap-[5px]'>
            <div className='w-[99%] sm:w-[49%] h-[99%] flex flex-col justify-center items-center p-[2%] gap-[3px]'>
              <h3 className='w-[99%] h-[10%] flex justify-start items-center font-bold'>📂 Books Categories</h3>
              <ul className='w-[99%] h-[90%] flex flex-col justify-start items-start list-none text-[14px] font-normal text-[#565D6DFF] gap-[5px]'>
                <li>Thriller books</li>
                <li>Mystery books</li>
                <li>Romantic books</li>
                <li>Science books</li>
                <li>Religious books</li>
                <li>Self-help books</li>
                <li>AI & ML books</li>
                <li>Web Dev books</li>
                <li>Cyber security books</li>
                <li>Python books</li>
                <li>Comics books</li>
              </ul>
            </div>
            <div className='w-[99%] sm:w-[49%] h-[99%] flex flex-col justify-center items-center p-[2%] gap-[3px]'>
              <h3 className='w-[99%] h-[15%] flex justify-start items-center font-bold'>⚙️ Website Or Project Credits</h3>
              <ul className='w-[99%] h-[85%] flex flex-col justify-start items-start list-none text-[14px] font-normal text-[#565D6DFF] gap-[5px]'>
                <li>🧑‍💻 Shashikant Giri – Project Developer & Designer</li>
                <li>👩‍💻 Krit Yadav – UI/UX Designer</li>
                <li>👩‍💻 Shashikant Giri – Frontend Developer</li>
                <li>👨‍💻 Shashikant Giri – Backend Developer</li>
                <li>🧑‍🎓 Krit Yadav – Content & Research Support</li>
                <li>🧑‍💼 Shashikant Giri & Krit Yadav – System Testing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[99%] h-[20%] flex flex-col justify-center items-start gap-[5px]'>
          <hr className='w-[100%] h-[2px] border-[#697cd0] '/>
          <div className='w-[99%] h-[80%] flex justify-start items-start pl-[10px]'>
            <p className='text-md italic font-normal text-[#00000099]'>&copy; 2024 Bookoe. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default footer   