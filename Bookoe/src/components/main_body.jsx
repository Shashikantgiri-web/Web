import React from 'react'
import { useState, useRef } from 'react'
import '../App.css'
import Content from './content.jsx'
import Thriller from './books/Thriller.jsx'
import Mystery from './books/Mystery.jsx'
import Romantic from './books/Romantic.jsx'
import Science from './books/Science.jsx'
import Religious from './books/Religious.jsx'
import Self_help from './books/Self_help.jsx'
import AI from './books/AI.jsx'
import Web from './books/Web.jsx'
import Cyber from './books/Cyber.jsx'
import Python from './books/Python.jsx'
import Comics from './books/Comics.jsx'
import Backbutton from './backbutton.jsx'

const main_body = () => {
  const fiction_hidden = useRef();
  const non_fiction_hidden = useRef();
  const technology_hidden = useRef();
  const children_hidden = useRef();
  const fiction_hidden_2 = useRef();
  const non_fiction_hidden_2 = useRef();
  const technology_hidden_2 = useRef();
  const children_hidden_2 = useRef();

  const down_1 = useRef();
  const down_2 = useRef();
  const down_3 = useRef();
  const down_4 = useRef();
  const down_2_1 = useRef();
  const down_2_2 = useRef();
  const down_2_3 = useRef();
  const down_2_4 = useRef();

  const up_1 = useRef();
  const up_2 = useRef();
  const up_3 = useRef();
  const up_4 = useRef();
  const up_2_1 = useRef();
  const up_2_2 = useRef();
  const up_2_3 = useRef();
  const up_2_4 = useRef();

  const content = useRef();
  const [activeComponent, setActiveComponent] = useState("Content");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Content":
        return <><Content /></>;
      case "Thriller":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Thriller /></>;
      case "Mystery":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Mystery /></>;
      case "Romantic":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Romantic /></>;
      case "Science":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Science /></>;
      case "Religious":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Religious /></>;
      case "Self-help":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Self_help /></>;
      case "AI":
        return <><Backbutton setActiveComponent={setActiveComponent} /><AI /></>;
      case "Web":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Web /></>;
      case "Cyber":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Cyber /></>;
      case "Python":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Python /></>;
      case "Comics":
        return <><Backbutton setActiveComponent={setActiveComponent} /><Comics /></>;
      case "back":
        return <Content />;
      default:
        return <Content />;
    }
  }

  const handleDownClick = (down, up, category) => {
    down.current.style.display = "none";
    up.current.style.display = "block";
    category.current.style.display = "flex";
  }

  const handleUpClick = (down, up, category) => {
    down.current.style.display = "block";
    up.current.style.display = "none";
    category.current.style.display = "none";
  }
  return (
    <div className='w-full max-w-full h-auto min-h-screen p-[10px] md:p-[10vh] bg-[#FAFAFBFF] flex flex-col md:flex-row justify-start items-start gap-[20px] pt-[80px] md:pt-[10vh]' id='main'>
      <div className='w-[99%] md:w-[20%] h-auto md:h-[99%] flex flex-col justify-center items-start'>
        <div className='w-[99%] h-auto flex md:hidden flex-col justify-center items-start gap-2.5 p-2 rounded-2xl shadow-xs shadow-gray-500 overflow-hidden'>
          <div className='w-[99%] h-[50%] md:flex justify-center items-center col-span-4 p-[4px]'>
            <h1 className='w-[99%] h-[99%] flex justify-center items-center text-[20px] font-bold'>Filter by Category</h1>
          </div>
          <div className='w-[auto] h-auto flex flex-row justify-center items-center gap-1 overflow-y-scroll'>
            <div className='w-[120px] h-[90%] flex justify-center items-center p-[8px] border-2 border-gray-400 rounded-lg'>
              <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Fiction</h2>
              <div className="w-[20%] h-[99%] flex justify-center items-center">
                <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_2_1, up_2_1, fiction_hidden_2)} className='w-[20px] h-[20px] cursor-pointer' ref={down_2_1} />
                <img src="./up_arrow.png" onClick={() => handleUpClick(down_2_1, up_2_1, fiction_hidden_2)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_2_1} />
              </div>
            </div>
            <div className='w-[150px] h-[90%] flex justify-center items-center p-[8px] border-2 border-gray-400 rounded-lg'>
              <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Non-fiction</h2>
              <div className="w-[20%] h-[99%] flex justify-center items-center">
                <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_2_2, up_2_2, non_fiction_hidden_2)} className='w-[20px] h-[20px] cursor-pointer' ref={down_2_2} />
                <img src="./up_arrow.png" onClick={() => handleUpClick(down_2_2, up_2_2, non_fiction_hidden_2)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_2_2} />
              </div>
            </div>
            <div className='w-[150px] h-[90%] flex justify-center items-center p-[8px] border-2 border-gray-400 rounded-lg'>
              <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Technology</h2>
              <div className="w-[20%] h-[99%] flex justify-center items-center">
                <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_2_3, up_2_3, technology_hidden_2)} className='w-[20px] h-[20px] cursor-pointer' ref={down_2_3} />
                <img src="./up_arrow.png" onClick={() => handleUpClick(down_2_3, up_2_3, technology_hidden_2)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_2_3} />
              </div>
            </div>
            <div className='w-[250px] h-[90%] flex justify-center items-center p-[8px] border-2 border-gray-400 rounded-lg'>
              <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Children's & Young Adult</h2>
              <div className="w-[20%] h-[99%] flex justify-center items-center">
                <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_2_4, up_2_4, children_hidden_2)} className='w-[20px] h-[20px] cursor-pointer' ref={down_2_4} />
                <img src="./up_arrow.png" onClick={() => handleUpClick(down_2_4, up_2_4, children_hidden_2)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_2_4} />
              </div>
            </div>
          </div>
          <div className='w-[auto] h-auto flex flex-row justify-center items-start gap-1 overflow-y-scroll bg-[#b0a5f5] rounded-b-lg'>
            <div className="w-[120px] h-[150px] hidden justify-center items-center" ref={fiction_hidden_2}>
              <ul className='w-[99%] h-[99%] flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-1'>
                <li onClick={() => setActiveComponent("Thriller")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Thriller books</li>
                <li onClick={() => setActiveComponent("Mystery")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Mystery books</li>
                <li onClick={() => setActiveComponent("Romantic")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Romantic books</li>
              </ul>
            </div>
            <div className="w-[150px] h-[150px] hidden justify-center items-center" ref={non_fiction_hidden_2}>
              <ul className='w-[99%] h-[99%] flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-1'>
                <li onClick={() => setActiveComponent("Science")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Science books</li>
                <li onClick={() => setActiveComponent("Religious")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Religious books</li>
                <li onClick={() => setActiveComponent("Self-help")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Self-help books</li>
              </ul>
            </div>
            <div className="w-[150px] h-[150px] hidden justify-center items-center" ref={technology_hidden_2}>
              <ul className='w-[99%] h-[99%] flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-1'>
                <li onClick={() => setActiveComponent("AI")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>AI & ML books</li>
                <li onClick={() => setActiveComponent("Web")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Web Dev books</li>
                <li onClick={() => setActiveComponent("Cyber")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Cyber security books</li>
                <li onClick={() => setActiveComponent("Python")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Python books</li>
              </ul>
            </div>
            <div className="w-[250px] h-[150px] hidden justify-center items-center" ref={children_hidden_2}>
              <ul className='w-[99%] h-[99%] flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-1'>
                <li onClick={() => setActiveComponent("Comics")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Comics books</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[99%] h-auto hidden md:flex flex-col justify-center items-start gap-2.5 p-2 rounded-2xl shadow-xs shadow-gray-500 sticky top-[80px] self-start'>
          <div className='w-[99%] h-[50%] md:flex justify-center items-center col-span-4 p-[4px]'>
            <h1 className='w-[99%] h-[99%] flex justify-center items-center text-[20px] font-bold'>Filter by Category</h1>
          </div>
          <div className='w-[99%] h-[50%] flex justify-center items-center p-[4px]'>
            <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Fiction</h2>
            <div className="w-[20%] h-[99%] flex justify-center items-center">
              <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_1, up_1, fiction_hidden)} className='w-[20px] h-[20px] cursor-pointer' ref={down_1} />
              <img src="./up_arrow.png" onClick={() => handleUpClick(down_1, up_1, fiction_hidden)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_1} />
            </div>
          </div>
          <div className="w-[99%] h-auto hidden justify-center items-center p-[4px]" ref={fiction_hidden}>
            <ul className='w-[99%] h-auto flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-5'>
              <li onClick={() => setActiveComponent("Thriller")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Thriller books</li>
              <li onClick={() => setActiveComponent("Mystery")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Mystery books</li>
              <li onClick={() => setActiveComponent("Romantic")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Romantic books</li>
            </ul>
          </div>
          <div className='w-[99%] h-[50%] flex justify-center items-center p-[4px]'>
            <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Non-fiction</h2>
            <div className="w-[20%] h-[99%] flex justify-center items-center">
              <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_2, up_2, non_fiction_hidden)} className='w-[20px] h-[20px] cursor-pointer' ref={down_2} />
              <img src="./up_arrow.png" onClick={() => handleUpClick(down_2, up_2, non_fiction_hidden)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_2} />
            </div>
          </div>
          <div className="w-[99%] h-auto hidden justify-center items-center p-[4px]" ref={non_fiction_hidden}>
            <ul className='w-[99%] h-auto flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-5'>
              <li onClick={() => setActiveComponent("Science")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Science books</li>
              <li onClick={() => setActiveComponent("Religious")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Religious books</li>
              <li onClick={() => setActiveComponent("Self-help")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Self-help books</li>
            </ul>
          </div>
          <div className='w-[99%] h-[50%] flex justify-center items-center p-[4px]'>
            <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Technology</h2>
            <div className="w-[20%] h-[99%] flex justify-center items-center">
              <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_3, up_3, technology_hidden)} className='w-[20px] h-[20px] cursor-pointer' ref={down_3} />
              <img src="./up_arrow.png" onClick={() => handleUpClick(down_3, up_3, technology_hidden)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_3} />
            </div>
          </div>
          <div className="w-[99%] h-auto hidden justify-center items-center p-[4px]" ref={technology_hidden}>
            <ul className='w-[99%] h-auto flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-5'>
              <li onClick={() => setActiveComponent("AI")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>AI & ML books</li>
              <li onClick={() => setActiveComponent("Web")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Web Dev books</li>
              <li onClick={() => setActiveComponent("Cyber")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Cyber security books</li>
              <li onClick={() => setActiveComponent("Python")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Python books</li>
            </ul>
          </div>
          <div className='w-[99%] h-[50%] flex justify-center items-center p-[4px]'>
            <h2 className='w-[80%] h-[99%] flex justify-start items-center font-bold text-[15px]'>Children's & Young Adult</h2>
            <div className="w-[20%] h-[99%] flex justify-center items-center">
              <img src="./Down_arrow.svg" onClick={() => handleDownClick(down_4, up_4, children_hidden)} className='w-[20px] h-[20px] cursor-pointer' ref={down_4} />
              <img src="./up_arrow.png" onClick={() => handleUpClick(down_4, up_4, children_hidden)} className='w-[13px] h-[13px] cursor-pointer hidden' ref={up_4} />
            </div>
          </div>
          <div className="w-[99%] h-auto hidden justify-center items-center p-[4px]" ref={children_hidden}>
            <ul className='w-[99%] h-auto flex flex-col justify-start items-start gap-2.5 bg-[#b0a5f5] rounded-b-lg pt-2 pr-1 pb-2 pl-5'>
              <li onClick={() => setActiveComponent("Comics")} className='w-[99%] h-[30px] py-0.5 list-none rounded-[5px] text-[14px] font-medium cursor-pointer hover:bg-[#8f36b9d6] hover:text-white'>Comics books</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-[99%] md:w-[80%] h-[99%] p-2.5 flex flex-col justify-center items-start rounded-2xl shadow-xs shadow-black' ref={content}>
        {renderComponent()}
      </div>
    </div>
  )
}

export default main_body;