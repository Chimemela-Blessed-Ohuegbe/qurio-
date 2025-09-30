import { useEffect, useState } from 'react'
import './App.css'

// ***********COMPONENTS************
import Iconbar from './Components/Iconbar/Iconbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Stats from './Components/Stats/Stats'
import Categories from './Components/Categories/Cat'
import Main from './Components/Main/Main'

function App() {
  const [darkMode,setDarkMode] = useState(false)

  return (
    <>
      <div className="container">
        <Iconbar/>
        <Sidebar/>
        <Navbar darkMode ={darkMode}  setDarkMode={setDarkMode}/>
        <Hero/>
        <Stats/>
        <Categories/>
        <Main/>
      </div>
      
    </>
  )
}

export default App
