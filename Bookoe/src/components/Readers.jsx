import React from 'react'
import '../App.css'

const Readers = () => {
    return (
        <div className='w-[99vw] h-[580px] p-[5%] flex flex-col justify-center items-center gap-[15px]'>
            <div className='w-[100%] h-[15%] sm:h-[40%] flex justify-center items-center'>
                <h1 className='w-[90%] sm:w-[60%] h-[90%] text-3xl font-bold flex justify-center items-center'>What Our Readers Say</h1>
            </div>
            <div className='w-[100%] h-[85%] sm:h-[60%] flex flex-col sm:flex-row justify-center items-start gap-[2%]'>
                <div className='Readers_box w-[99%] sm:w-[50%] md:w-[35%] h-[99%] flex flex-col justify-between items-center gap-[5px] rounded-[16px] shadow-xs shadow-gray-500' >
                    <div className='w-[90%] h-[40%] flex justify-center items-center'>
                        <p className='w-[99%] h-[99%] text-sm flex justify-center items-center italic'>
                            “This site is amazing! I can read and download any PDF I need without signing in. It’s completely free and super easy to use.”
                        </p>
                    </div>
                    <div className='w-[90%] h-[60%] flex flex-row justify-center items-center'>
                        <div className='w-[20%] h-[99%] flex justify-center items-center rounderd-full'>
                            <img src="/person_2.png" alt=""   className='w-[80%] h-[80%]' />
                        </div>
                        <div className='w-[50%] h-[99%] flex flex-col justify-start items-center'>
                            <div className='w-[99%] h-[50%] flex justify-start items-end'>
                                <p>Amit Verma</p>
                            </div>
                            <div className='w-[99%] h-[50%] flex justify-start items-start'>
                                <p>Student Reader</p>
                            </div>
                        </div>
                        <div className='w-[30%] h-[99%] flex justify-start items-center'>
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                        </div>
                    </div>
                </div>
                <div className='w-[99%] sm:w-[50%] md:w-[35%] h-[99%] flex flex-col justify-between items-center gap-[5px] rounded-[16px] shadow-xs shadow-gray-500'>
                    <div className='w-[90%] h-[40%] flex justify-center items-center'>
                        <p className='w-[99%] h-[99%] text-sm flex justify-center items-center italic'>
                            “I found all my college notes and books here. No ads, no logins just instant access to what I need. Highly recommend it!”
                        </p>
                    </div>
                    <div className='w-[90%] h-[60%] flex flex-row justify-center items-center'>
                        <div className='w-[20%] h-[99%] flex justify-center items-center rounderd-full'>
                            <img src="/person_2.png" alt=""   className='w-[80%] h-[80%]' />
                        </div>
                        <div className='w-[50%] h-[99%] flex flex-col justify-start items-center'>
                            <div className='w-[99%] h-[50%] flex justify-start items-end'>
                                <p>Sneha Patil</p>
                            </div>
                            <div className='w-[99%] h-[50%] flex justify-start items-start'>
                                <p>Book Enthusiast</p>
                            </div>
                        </div>
                        <div className='w-[30%] h-[99%] flex flex-row justify-start items-center'>
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                            <img src="/empty-star.svg" alt=""   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Readers  