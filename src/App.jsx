import { useState } from 'react'
// import { BrowserRouter,Link, Router } from 'react-router-dom'
import  Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { LoginPage } from './pages/LoginPage'
import Cases from './pages/Cases'
import Case from './pages/Case'
import HospitalInfo from './pages/HospitalInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/cases' element={<Cases/>}></Route>
        <Route path='/case' element={<Case/>}></Route>
        <Route path='/hospitalInfo' element={<HospitalInfo/>}></Route>
        
      </Routes>
    </>
  )
}

export default App
