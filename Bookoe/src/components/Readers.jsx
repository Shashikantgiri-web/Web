import React from 'react'
import '../App.css'

const Readers = () => {
    const testimonials = [
        {
            text: "This site is amazing! I can read and download any PDF I need without signing in. It's completely free and super easy to use.",
            name: "Amit Verma",
            role: "Student Reader",
            delay: 0.2
        },
        {
            text: "I found all my college notes and books here. No ads, no logins just instant access to what I need. Highly recommend it!",
            name: "Sneha Patil",
            role: "Book Enthusiast",
            delay: 0.4
        }
    ];

    return (
        <div className='w-full max-w-full h-auto min-h-[580px] p-[5%] flex flex-col justify-center items-center gap-[15px]'>
            <div className='w-[100%] h-auto py-4 flex justify-center items-center
                            opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards]'>
                <h1 className='w-[90%] sm:w-[60%] text-3xl font-bold flex justify-center items-center
                               transform transition-all duration-300 hover:scale-105'>
                    What Our Readers Say
                </h1>
            </div>
            <div className='w-[100%] h-auto flex flex-col sm:flex-row justify-center items-start gap-[2%]'>
                {testimonials.map((testimonial, idx) => (
                    <div 
                        key={idx}
                        className='Readers_box w-[99%] sm:w-[50%] md:w-[35%] h-auto min-h-[250px] 
                                   flex flex-col justify-between items-center gap-[5px] 
                                   rounded-[16px] shadow-xs shadow-gray-500 p-4
                                   opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]
                                   transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2'
                        style={{ animationDelay: `${testimonial.delay}s` }}
                    >
                        <div className='w-[90%] h-auto py-4 flex justify-center items-center'>
                            <p className='w-[99%] text-sm flex justify-center items-center italic'>
                                "{testimonial.text}"
                            </p>
                        </div>
                        <div className='w-[90%] h-auto py-2 flex flex-row justify-center items-center'>
                            <div className='w-[20%] h-[99%] flex justify-center items-center rounded-full
                                            transform transition-all duration-300 hover:scale-110'>
                                <img src="/person_2.png" alt="" className='w-[80%] h-[80%] rounded-full' />
                            </div>
                            <div className='w-[50%] h-[99%] flex flex-col justify-start items-center'>
                                <div className='w-[99%] h-[50%] flex justify-start items-end'>
                                    <p className='font-semibold'>{testimonial.name}</p>
                                </div>
                                <div className='w-[99%] h-[50%] flex justify-start items-start'>
                                    <p className='text-sm text-gray-600'>{testimonial.role}</p>
                                </div>
                            </div>
                            <div className='w-[30%] h-[99%] flex flex-row justify-start items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <img 
                                        key={i}
                                        src="/empty-star.svg" 
                                        alt="" 
                                        className='w-4 h-4 transform transition-all duration-200 hover:scale-125'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Readers  