import { useState } from 'react'
// import { BrowserRouter,Link, Router } from 'react-router-dom'
import  Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>  
    </>
  )
}

export default App
