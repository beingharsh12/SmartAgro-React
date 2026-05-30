import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CropGuide from './pages/CropGuide'
import Agriculturists from './pages/Agriculturists'
import Purchase from './pages/Purchase'
import Weather from './pages/Weather'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cropguide' element={<CropGuide/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/agriculturists' element={<Agriculturists/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  ) 
}

export default App
