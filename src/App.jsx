import { useEffect, useState } from 'react'
import './App.css'

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
        <div className="icon-bar">icons</div>
        <div className="sidebar">s</div>
        <div className="navbar">n</div>
        <div className="hero">h</div>
        <div className="stats">s</div>
        <div className="search-category">sc</div>
        <div className="main"></div>

      </div>
      
    </>
  )
}

export default App
