import Home from './pages/Home'
import CropGuide from './pages/CropGuide'
import Agriculturists from './pages/Agriculturists'
import Purchase from './pages/Purchase'
import Weather from './pages/Weather'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Rabi from './pages/Rabi'
import Kharif from './pages/Kharif'
import Zaid from './pages/Zaid'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart'
import Faq from './pages/Faq'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cropguide' element={<CropGuide />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/agriculturists' element={<Agriculturists />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/Seasons/rabi' element={<Rabi />} />
        <Route path='/Seasons/kharif' element={<Kharif />} />
        <Route path='/Seasons/zaid' element={<Zaid />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/faq' element={<Faq />} />
      </Route>
    </Routes>
  )
}

export default App
