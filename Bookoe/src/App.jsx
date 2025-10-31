import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import Baner from './components/baner.jsx'
import IntoBox from './components/IntoBox.jsx'
import MainBody from './components/main_body.jsx'
import Readers from './components/Readers.jsx'
import Footer from './components/footer.jsx'

import New from './components/New.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Header /><Baner /><IntoBox /><MainBody /><Readers /><Footer /></>
    },
    {
      path:"/Categories",
      element:<><Header /><MainBody /><Footer /></>
    },
    {
      path:"/New",
      element:<><Header /><New /><Footer /></>
    }
  ])
  return (
    <>
      {/* <Header />
      <Baner />
      <IntoBox />
      <MainBody />
      <Readers />
      <Footer /> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
