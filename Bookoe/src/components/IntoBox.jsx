import React from 'react'
import '../App.css'

const IntoBox = () => {
    return (
        <div className='w-[98vw] h-[700px] sm:h-[656px] md:h-[328px] grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-1 justify-center items-center gap-[10px]'>
            <div className='w-[95%] h-[99%] flex flex-col justify-center items-center gap-[5px]'>
                <div className='w-[99%] h-[48%] flex justify-center items-end'>
                    <img src="/access.svg" alt="" className='w-[40px]' />
                </div>
                <div className='w-[99%] h-[20%] flex justify-center items-center'>
                    <h2 className='text-[18px] font-bold text-[#7B61FFFF]'>📚 Instant Access</h2>
                </div>
                <div className='w-[99%] h-[30%] flex justify-center items-start'>
                    <p className='text-[14px] font-normal text-[#565D6DFF] text-center px-[10px] w-[80%]'>
                        Start reading any PDF instantly no waiting, no downloads required.
                    </p>
                </div>
            </div>
            <div className='w-[95%] h-[99%] flex flex-col justify-center items-center gap-[10px]'>
                <div className='w-[99%] h-[48%] flex justify-center items-end'>
                    <img src="/person.png" alt="" className='w-[40px]' />
                </div>
                <div className='w-[99%] h-[20%] flex justify-center items-center'>
                    <h2 className='text-[18px] font-bold text-[#7B61FFFF]'>🔒 No Sign-In Needed</h2>
                </div>
                <div className='w-[99%] h-[30%] flex justify-center items-start'>
                    <p className='text-[14px] font-normal text-[#565D6DFF] text-center px-[10px] w-[80%]'>
                        Enjoy full access without creating an account or sharing personal details.
                    </p>
                </div>
            </div>
            <div className='w-[95%] h-[99%] flex flex-col justify-center items-center gap-[10px]'>
                <div className='w-[99%] h-[48%] flex justify-center items-end'>
                    <img src="/pdf.svg" alt="" className='w-[40px]' />
                </div>
                <div className='w-[99%] h-[20%] flex justify-center items-center'>
                    <h2 className='text-[18px] font-bold text-[#7B61FFFF]'>💎 High-Quality PDFs</h2>
                </div>
                <div className='w-[99%] h-[30%] flex justify-center items-start'>
                    <p className='text-[14px] font-normal text-[#565D6DFF] text-center px-[10px] w-[80%]'>
                        Read and download clean, well-formatted PDFs for all your subjects and interests.
                    </p>
                </div>
            </div>
            <div className='w-[95%] h-[99%] flex flex-col justify-center items-center gap-[10px]'>
                <div className='w-[99%] h-[48%] flex justify-center items-end'>
                    <img src="/free_book.png" alt="" className='w-[40px]' />
                </div>
                <div className='w-[99%] h-[20%] flex justify-center items-center'>
                    <h2 className='text-[18px] font-bold text-[#7B61FFFF]'>🌐 Completely Free</h2>
                </div>
                <div className='w-[99%] h-[30%] flex justify-center items-start'>
                    <p className='text-[14px] font-normal text-[#565D6DFF] text-center px-[10px] w-[80%]'>
                        All PDFs are free to access, read, and download anytime.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IntoBox