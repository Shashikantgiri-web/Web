import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Contain from './components/contain.jsx'
import Footer from './components/footer.jsx'

function App() {


  return (
    <>
      <div className="absolute top-0 z-[-2] h-[105vh] w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,#4a66b0_0,#332592_100%)]"></div>
      <Navbar />
      <Contain />
      <Footer />
    </>
  )
}

export default App
