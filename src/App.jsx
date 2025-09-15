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
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(()=>{
  //   fetch("https://the-trivia-api.com/v2/questions")
  //   .then(res => res.json())
  //   .then((data) => {
  //     setQuestions(data)
  //     setLoading(false)
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //     setLoading(false)
  //   })
  // },[])

  // if (loading){
  //   return <p>Loading</p>
  // }

  // const decodeHtml = (str) =>{
  //   const newText = document.createElement("textarea")
  //   newText.innerHTML = str
  //   return newText.value
  // }
  return (
    <>
      <div className="container">
        <Iconbar/>
        <Sidebar/>
        <Navbar/>
        <Hero/>
        <Stats/>
        <Categories/>
        <Main/>
      </div>
      
    </>
  )
}

export default App
