import React from 'react'
import '../App.css'

const content = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-[5%]'>
      <div className='w-full h-[950px] hidden md:flex flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Recommended For You</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>Explore our hand-picked selection of books tailored just for your reading preferences.</p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-4 grid-rows-2 justify-center items-center gap-1.5'>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1400px] flex md:hidden flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Recommended For You</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>Explore our hand-picked selection of books tailored just for your reading preferences.</p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-2 grid-row-3 sm:grid-cols-3 dm:grid-rows-2 justify-center items-center gap-1.5'>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[950px] hidden md:flex flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Recently Added Books</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>The books that recently added that show in here.</p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-4 grid-rows-2 justify-center items-center gap-1.5'>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1400px] flex md:hidden flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Recently Added Books</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>The books that recently added that show in here.</p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-2 grid-row-3 sm:grid-cols-3 dm:grid-rows-2 justify-center items-center gap-1.5'>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[950px] hidden md:flex flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
          <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Featured Books</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>Discover critically acclaimed and popular titles that everyone is talking about.</p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-4 grid-rows-2 justify-center items-center gap-1.5'>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1400px] flex md:hidden flex-col justify-center items-center border-2 border-[#778899] p-[10px]'>
        <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
          <div className='w-full h-[15%] flex flex-col justify-center items-center gap-2'>
            <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Featured Books</h1>
          </div>
          <div className='w-[99%] h-[48%] pl-2.5 flex justify-start items-center'>
            <p className='font-regular text-[16px] text-[#565D6DFF]'>Discover critically acclaimed and popular titles that everyone is talking about.</p>
          </div>
        </div>
        <div className='w-full h-[85%] grid grid-cols-2 grid-row-3 sm:grid-cols-3 dm:grid-rows-2 justify-center items-center gap-1.5'>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
            <div className='w-[99%] h-[60%] flex justify-center items-center'>
              <img src="https://marketplace.canva.com/EAGHWOQ105U/1/0/1131w/canva-white-and-green-simple-business-report-cover-page-a4-document-V10S_ZQxLkU.jpg" alt="" className='w-[99%] h-[99%] rounded-[10px]' />
            </div>
            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
              <div className='w-[99%] h-[49%] flex justify-center items-center'>
                <h4>Temp pdf files</h4>
              </div>
              <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                    <a href="./Temp_files.pdf" className='text-white'>
                      Read
                    </a>
                  </button>
                </div>
                <div className='w-[49%] h-[99%] flex justify-center items-center'>
                  <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default content  