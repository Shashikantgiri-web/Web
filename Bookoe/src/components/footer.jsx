import React from 'react'
import "../App.css"

const footer = () => {
  const socialIcons = [
    { src: "/lucide-Facebook-Outlined.svg", alt: "Facebook", delay: 0 },
    { src: "/lucide-Twitter-Outlined.svg", alt: "Twitter", delay: 0.1 },
    { src: "/lucide-Instagram-Outlined.svg", alt: "Instagram", delay: 0.2 },
    { src: "/lucide-Linkedin-Outlined.svg", alt: "LinkedIn", delay: 0.3 },
    { src: "/lucide-Youtube-Outlined.svg", alt: "YouTube", delay: 0.4 }
  ];

  return (
    <footer className='w-full max-w-full h-auto min-h-[650px] p-[8%] flex flex-col justify-center items-center gap-[10px] bg-[#F2F0FFFF]
                      opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
        <div className='w-[99%] h-auto flex flex-col sm:flex-row justify-between items-end gap-[30px] sm:gap-0'>
          <div className='w-[99%] sm:w-[40%] h-auto flex flex-col justify-center items-center
                          opacity-0 animate-[slideInLeft_0.6s_ease-out_0.3s_forwards]'>
            <div className='w-[99%] h-auto py-4 flex flex-row justify-center items-center'>
              <div className='w-[10%] h-[99%] flex justify-center items-center
                              transform transition-all duration-300 hover:scale-110 hover:rotate-12'>
                <img src="/logo.svg" className="w-[40px] h-[40px]" alt="logo" />
              </div>
              <div className='w-[90%] h-[99%] flex justify-start items-center'>
                <h2 className='text-[23px] font-bold text-[#7B61FFFF]
                                transform transition-all duration-300 hover:scale-105'>Bookoe</h2>
              </div>
            </div>
            <div className='w-[99%] h-auto py-4 flex justify-center items-center p-[10px] text-black text-sm'>
              <h4>FreePDFs is a simple and reliable platform where you can read and download PDFs for free no sign-in, no ads, and no limits. Access study materials, e-books, and notes anytime, anywhere.</h4>
            </div>
            <div className='w-[99%] h-auto py-4 flex flex-row justify-start items-center pl-[3px] gap-2'>
              {socialIcons.map((icon, idx) => (
                <div 
                  key={idx}
                  className='w-[10%] h-[99%] flex justify-center items-center
                             transform transition-all duration-300 hover:scale-125 hover:-translate-y-1 cursor-pointer'
                  style={{ animationDelay: `${icon.delay}s` }}
                >
                  <img src={icon.src} alt={icon.alt} className='w-[20px] h-[20px] fill-[#171A1FFF]' />
                </div>
              ))}
            </div>
          </div>
          <div className='w-[99%] sm:w-[50%] h-auto flex flex-col sm:flex-row justify-center items-center gap-[5px]
                          opacity-0 animate-[slideInRight_0.6s_ease-out_0.4s_forwards]'>
            <div className='w-[99%] sm:w-[49%] h-auto flex flex-col justify-center items-center p-[2%] gap-[3px]'>
              <h3 className='w-[99%] h-auto py-2 flex justify-start items-center font-bold
                             transform transition-all duration-300 hover:scale-105'>📂 Books Categories</h3>
              <ul className='w-[99%] h-auto flex flex-col justify-start items-start list-none text-[14px] font-normal text-[#565D6DFF] gap-[5px]'>
                {['Thriller books', 'Mystery books', 'Romantic books', 'Science books', 'Religious books', 'Self-help books', 'AI & ML books', 'Web Dev books', 'Cyber security books', 'Python books', 'Comics books'].map((item, idx) => (
                  <li 
                    key={idx}
                    className='transform transition-all duration-200 hover:translate-x-2 hover:text-purple-600 cursor-pointer'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-[99%] sm:w-[49%] h-auto flex flex-col justify-center items-center p-[2%] gap-[3px]'>
              <h3 className='w-[99%] h-auto py-2 flex justify-start items-center font-bold
                             transform transition-all duration-300 hover:scale-105'>⚙️ Website Or Project Credits</h3>
              <ul className='w-[99%] h-auto flex flex-col justify-start items-start list-none text-[14px] font-normal text-[#565D6DFF] gap-[5px]'>
                {[
                  '🧑‍💻 Shashikant Giri – Project Developer & Designer',
                  '👩‍💻 Krit Yadav – UI/UX Designer',
                  '👩‍💻 Shashikant Giri – Frontend Developer',
                  '👨‍💻 Shashikant Giri – Backend Developer',
                  '🧑‍🎓 Krit Yadav – Content & Research Support',
                  '🧑‍💼 Shashikant Giri & Krit Yadav – System Testing'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className='transform transition-all duration-200 hover:translate-x-2 hover:text-purple-600'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[99%] h-auto py-4 flex flex-col justify-center items-start gap-[5px]
                        opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]'>
          <hr className='w-[100%] h-[2px] border-[#697cd0]'/>
          <div className='w-[99%] h-auto py-2 flex justify-start items-start pl-[10px]'>
            <p className='text-md italic font-normal text-[#00000099]'>&copy; 2024 Bookoe. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default footer   