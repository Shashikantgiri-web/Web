import React from 'react'
import '../App.css'

const IntoBox = () => {
    const features = [
        {
            icon: "/access.svg",
            title: "📚 Instant Access",
            description: "Start reading any PDF instantly no waiting, no downloads required.",
            delay: 0.2
        },
        {
            icon: "/person.png",
            title: "🔒 No Sign-In Needed",
            description: "Enjoy full access without creating an account or sharing personal details.",
            delay: 0.4
        },
        {
            icon: "/pdf.svg",
            title: "💎 High-Quality PDFs",
            description: "Read and download clean, well-formatted PDFs for all your subjects and interests.",
            delay: 0.6
        },
        {
            icon: "/free_book.png",
            title: "🌐 Completely Free",
            description: "All PDFs are free to access, read, and download anytime.",
            delay: 0.8
        }
    ];

    return (
        <div className='w-full max-w-full h-auto min-h-[700px] sm:min-h-[656px] md:min-h-[328px] 
                        grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-1 
                        justify-center items-center gap-[10px] py-8'>
            {features.map((feature, idx) => (
                <div 
                    key={idx}
                    className='w-[95%] h-[99%] flex flex-col justify-center items-center gap-[5px]
                               opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]
                               transform transition-all duration-300 hover:scale-105 hover:shadow-lg'
                    style={{ animationDelay: `${feature.delay}s` }}
                >
                    <div className='w-[99%] h-[48%] flex justify-center items-end
                                    transform transition-all duration-300 hover:scale-110 hover:-translate-y-2'>
                        <img src={feature.icon} alt="" className='w-[40px]' />
                    </div>
                    <div className='w-[99%] h-[20%] flex justify-center items-center'>
                        <h2 className='text-[18px] font-bold text-[#7B61FFFF]
                                       transform transition-all duration-300 hover:scale-105'>
                            {feature.title}
                        </h2>
                    </div>
                    <div className='w-[99%] h-[30%] flex justify-center items-start'>
                        <p className='text-[14px] font-normal text-[#565D6DFF] text-center px-[10px] w-[80%]'>
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IntoBox