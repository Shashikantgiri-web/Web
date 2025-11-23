import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'

const Content = () => {
  const [api, setApi] = useState([]);
  const [api_2, setApi_2] = useState([]);
  const [api_3, setApi_3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Optimized: Single fetch function that can be reused
  const fetchApi = async (url, setter) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setter(data.works || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      // Fetch different data for variety (you can change these URLs)
      await Promise.all([
        fetchApi("https://openlibrary.org/subjects/place%3Aindia.json", setApi),
        fetchApi("https://openlibrary.org/subjects/fiction.json", setApi_2),
        fetchApi("https://openlibrary.org/subjects/nonfiction.json", setApi_3)
      ]);
      setLoading(false);
    };
    loadData();
  }, [])

  // Book card component with animations
  const BookCard = ({ book, idx, delay = 0 }) => {
    return (
      <div 
        key={book.key || idx}
        className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center 
                   transform transition-all duration-500 ease-out
                   hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/50 hover:-translate-y-1
                   opacity-0'
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

  if (loading) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2a2ac2]"></div>
        <p className='text-lg text-gray-600 animate-pulse'>Loading books...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
        <p className='text-red-600 text-lg font-semibold'>Error: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className='px-6 py-2 bg-[#2a2ac2] text-white rounded-lg 
                     transition-all duration-200
                     hover:bg-[#1a1aa0] hover:scale-105 hover:shadow-lg
                     active:scale-95'
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-[5%]'>
      {/* Recommended For You - Desktop */}
      <div className='w-full h-[950px] hidden md:flex flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF] transform transition-all duration-300 hover:scale-105 hover:text-[#2a2ac2]'>
              Recommended For You
            </h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>
              Explore our hand-picked selection of books tailored just for your reading preferences.
            </p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-4 grid-rows-2 justify-center items-center gap-1.5'>
          {api.slice(0, 8).map((book, idx) => (
            <BookCard key={book.key || `book-${idx}`} book={book} idx={idx} delay={idx * 100} />
          ))}
        </div>
      </div>

      {/* Recommended For You - Mobile */}
      <div className='w-full h-[1400px] flex md:hidden flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Recommended For You</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>
              Explore our hand-picked selection of books tailored just for your reading preferences.
            </p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-2 grid-rows-3 sm:grid-cols-3 justify-center items-center gap-1.5'>
          {api.slice(0, 6).map((book, idx) => (
            <BookCard key={book.key || `book-mobile-${idx}`} book={book} idx={idx} delay={idx * 100} />
          ))}
        </div>
      </div>

      {/* Recently Added Books - Desktop */}
      <div className='w-full h-[950px] hidden md:flex flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF] transform transition-all duration-300 hover:scale-105 hover:text-[#2a2ac2]'>
              Recently Added Books
            </h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>
              The books that recently added that show in here.
            </p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-4 grid-rows-2 justify-center items-center gap-1.5'>
          {api_2.slice(4, 12).map((book, idx) => (
            <BookCard key={book.key || `book-2-${idx}`} book={book} idx={idx} delay={idx * 100} />
          ))}
        </div>
      </div>

      {/* Recently Added Books - Mobile */}
      <div className='w-full h-[1400px] flex md:hidden flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Recently Added Books</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>
              The books that recently added that show in here.
            </p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-2 grid-rows-3 sm:grid-cols-3 justify-center items-center gap-1.5'>
          {api_2.slice(4, 9).map((book, idx) => (
            <BookCard key={book.key || `book-2-mobile-${idx}`} book={book} idx={idx} delay={idx * 100} />
          ))}
        </div>
      </div>

      {/* Featured Books - Desktop */}
      <div className='w-full h-[950px] hidden md:flex flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
          <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF] transform transition-all duration-300 hover:scale-105 hover:text-[#2a2ac2]'>
              Featured Books
            </h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>
              Discover critically acclaimed and popular titles that everyone is talking about.
            </p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-4 grid-rows-2 justify-center items-center gap-1.5'>
          {api_3.slice(2, 10).map((book, idx) => (
            <BookCard key={book.key || `book-3-${idx}`} book={book} idx={idx} delay={idx * 100} />
          ))}
        </div>
      </div>

      {/* Featured Books - Mobile */}
      <div className='w-full h-[1400px] flex md:hidden flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]'>
          <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Featured Books</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>
              Discover critically acclaimed and popular titles that everyone is talking about.
            </p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-2 grid-rows-3 sm:grid-cols-3 justify-center items-center gap-1.5'>
          {api_3.slice(2, 8).map((book, idx) => (
            <BookCard key={book.key || `book-3-mobile-${idx}`} book={book} idx={idx} delay={idx * 100} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content  