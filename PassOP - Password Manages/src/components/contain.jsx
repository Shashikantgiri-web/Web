import React from 'react'
import '../App.css'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const Contain = () => {
    const Eye = useRef()
    const Pass = useRef()
    const [add, setadd] = useState({ site: "", name: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])


    const addpassword = () => {
        // console.log(add);
        setpasswordArray([...passwordArray, { ...add, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...add, id: uuidv4() }]));
        console.log(passwordArray, add);
        setadd({ site: "", name: "", password: "" });
        toast('🗝️Password added successfully!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const editpassword = (id) => {
        console.log("Editing this id: ", id);
        setadd(passwordArray.filter(i => i.id === id)[0]);
        setpasswordArray(passwordArray.filter(item => item.id !== id));
    }
    const deletpassword = (id) => {
        console.log("Deleting this id: ", id);
        setpasswordArray(passwordArray.filter(item => item.id !== id));
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
        console.log(passwordArray);
    }
    const handlechange = (e) => {
        setadd({ ...add, [e.target.name]: e.target.value })
    }
    const showpassword = () => {
        if (Eye.current.src.includes("crosseye.png")) {
            Eye.current.src = "/eye.png"
            Eye.current.parentElement.children[0].type = "password"
        } else {
            Eye.current.src = "/crosseye.png"
            Eye.current.parentElement.children[0].type = "text"
        }
    }
    return (
        <>
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
            <div className='w-screen h-[90vh] flex items-center justify-center'>
                <div className='w-[90vw] h-[80vh] bg-transparent flex flex-col items-center justify-between p-2 mt-[5vh] ml-[5vw] mr-[5vw] mb-[5vh] rounded-2xl shadow-xs shadow-indigo-300'>
                    <div className='w-full h-[30vh] flex flex-col items-center justify-center gap-1'>
                        <div className="w-[99%] h-[24%] flex flex-row justify-start items-center gap-2">
                            <p className='text-white font-semibold'>
                                Website Url
                            </p>
                            <input value={add.site} onChange={handlechange} type="text" name="site" placeholder='Enter Website URL' className='w-[70%] sm:w-[40%] h-full flex justify-center items-center border-2 border-indigo-600 text-white bg-transparent rounded-2xl pl-1.5 hover:bg-indigo-200 hover:text-indigo-900' />
                        </div>
                        <div className="w-[99%] h-[24%] flex flex-row justify-start items-center gap-2">
                            <p className='text-white font-semibold'>
                                Website Name
                            </p>
                            <input value={add.name} onChange={handlechange} type="text" name="name" placeholder='Enter Website Name' className='w-[70%] sm:w-[40%] h-full flex justify-center items-center border-2 border-indigo-600 text-white bg-transparent rounded-2xl pl-1.5 hover:bg-indigo-200 hover:text-indigo-900' />
                        </div>
                        <div className="w-[99%] h-[24%] flex flex-row justify-start items-center gap-2">
                            <p className='text-white font-semibold'>
                                Website Password
                            </p>
                            <div className='w-[60%] sm:w-[40%] h-full flex justify-around items-center relative'>
                                <input value={add.password} onChange={handlechange} type="password" name="password" placeholder='Enter Website Password' className='w-full h-full flex justify-center items-center border-2 border-indigo-600 text-white bg-transparent rounded-2xl pl-1.5 hover:bg-indigo-200 hover:text-indigo-900' />
                                <img src="/eye.png" alt="" ref={Eye} onClick={showpassword} className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' />
                            </div>
                        </div>
                        <div className="w-[99%] h-[24%] flex flex-row justify-start items-center gap-2">
                            <button type="submit" className='w-[100px] h-[80%] flex flex-row gap-0.5 justify-center items-center font-bold rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white hover:text-indigo-200 hover:w-[120px] hover:h-[95%] transition-all duration-300 p-1' onClick={addpassword}>
                                <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover" className="w-5 h-5"></lord-icon>
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-[69vh] flex flex-col items-center justify-center overflow-y-scroll gap-1'>
                        <div className='w-full h-[10%] flex items-center justify-center '>
                            <h1 className='hover:text-indigo-300 text-white text-2xl font-semibold cursor-pointer'>Your passwords</h1>
                        </div>
                        <div className='w-[99%] h-[90%] flex items-center justify-center'>
                            <div className="w-[99%] h-[99%] relative overflow-x-auto bg-neutral-primary-soft shadow-xs border-2 border-indigo-600 text-white bg-transparent rounded-2xl p-2 scrollbar-hide">
                                {passwordArray.length === 0 && <h1 className='text-white text-center font-semibold text-lg'>No passwords added yet!</h1>}
                                {passwordArray.length > 0 && <table className="w-full text-sm text-left rtl:text-right text-body">
                                    <thead className="bg-neutral-secondary-soft border-b border-default">
                                        <tr className='text-white text-lg font-semibold'>
                                            <th scope="col" className="px-6 py-3 font-medium cursor-pointer hover:text-indigo-200">
                                                Website Url
                                            </th>
                                            <th scope="col" className="px-6 py-3 font-medium cursor-pointer hover:text-indigo-200">
                                                Website Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 font-medium cursor-pointer hover:text-indigo-200">
                                                Website Password
                                            </th>
                                            <th scope="col" className="px-6 py-3 font-medium cursor-pointer hover:text-indigo-200">
                                                Edit & Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passwordArray.map((item, index) => {
                                            return <tr key={index} className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default text-white hover:text-indigo-700 hover:bg-indigo-200">
                                                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap cursor-pointer">
                                                    <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                                </th>
                                                <td className="px-6 py-4 cursor-pointer">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 cursor-pointer" ref={Pass}>
                                                    {item.password}
                                                </td>
                                                <td className="px-6 py-4 cursor-pointer flex flex-row items-center justify-start gap-2">
                                                    <img src="/edit.png" alt="" className='w-5 h-5 cursor-pointer' onClick={() => { editpassword(item.id); }} />
                                                    <lord-icon src="https://cdn.lordicon.com/xyfswyxf.json" trigger="hover" className="w-5 h-5 cursor-pointer" onClick={() => { deletpassword(item.id); }}></lord-icon>
                                                </td>
                                            </tr>;
                                        })}
                                    </tbody>
                                </table>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contain