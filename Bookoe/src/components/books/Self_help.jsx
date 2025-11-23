import React from 'react'
import '..//..//App.css'
import { useState, useEffect } from 'react'

const Self_help = () => {
    const [api, setApi] = useState([]);
    const fetchApi = async () => {
        let url = await fetch("https://openlibrary.org/subjects/self_help.json");
        let data = await url.json();
        setApi(data.works || []);
        console.log(data);
    }
    useEffect(() => {
        fetchApi();
    }, [])

    const BookCard = ({ book, idx, delay = 0 }) => {
        return (
            <div 
                key={book.key || idx}
                className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 
                           flex flex-col justify-start items-center
                           opacity-0
                           transform transition-all duration-500 ease-out
                           hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/50 hover:-translate-y-1'
                style={{
                    animation: `fadeInUp 0.6s ease-out ${delay}ms forwards`
                }}
            >
                <div className='w-[99%] h-[60%] flex justify-center items-center overflow-hidden rounded-[10px] 
                                transition-transform duration-300 hover:scale-110'>
                    <img 
                        src={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : '/fallback.jpg'} 
                        alt={book.title || 'cover'} 
                        className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90" 
                        loading="lazy"
                    />
                </div>
                <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
                    <div className='w-[99%] h-[49%] flex justify-center items-center'>
                        <h4 className='text-center px-2 text-sm font-semibold line-clamp-2'>{book.title}</h4>
                    </div>
                    <div className='w-[99%] h-[49%] flex flex-row justify-center items-center gap-2'>
                        <a 
                            href="./Temp_files.pdf" 
                            className='w-[45%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] 
                                       flex justify-center items-center
                                       transform transition-all duration-200
                                       hover:bg-[#1a1aa0] hover:scale-105 active:scale-95
                                       shadow-md hover:shadow-lg'
                        >
                            Read
                        </a>
                        <a 
                            href="./Temp_files.pdf" 
                            download
                            className='w-[45%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] 
                                       flex justify-center items-center
                                       transform transition-all duration-200
                                       hover:bg-[#1a1aa0] hover:scale-105 active:scale-95
                                       shadow-md hover:shadow-lg'
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-auto min-h-screen flex flex-col justify-start items-center'>
            <div className='w-full h-auto min-h-[120px] py-4 flex flex-col justify-center items-center gap-1
                            opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
                <div className='w-[99%] h-auto py-2 pl-2.5 flex justify-start items-end'>
                    <h1 className='text-[30px] font-bold text-[#171A1FFF]
                                   transform transition-all duration-300 hover:scale-105'>Self-help books</h1>
                </div>
                <div className='w-[99%] h-auto py-2 pl-2.5 flex justify-start items-start'>
                    <p className='text-[16px] font-normal text-[#565D6DFF]'>Boost your confidence and motivation with practical guides to personal growth and success.</p>
                </div>
            </div>
            <div className='w-full h-auto hidden md:grid grid-cols-4 grid-rows-auto justify-center items-center gap-[5px] py-4'>
                {api.slice(0, 32).map((book, idx) => (
                    <BookCard key={book.key || `book-${idx}`} book={book} idx={idx} delay={idx * 50} />
                ))}
            </div>
            <div className='w-full h-auto md:hidden grid grid-cols-2 sm:grid-cols-3 justify-center items-center gap-[5px] py-4'>
                {api.slice(0, 16).map((book, idx) => (
                    <BookCard key={book.key || `book-mobile-${idx}`} book={book} idx={idx} delay={idx * 50} />
                ))}
            </div>
        </div>
    )
}

export default Self_help
