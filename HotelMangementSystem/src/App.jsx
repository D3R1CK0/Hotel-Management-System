import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Register from './pages/Register'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import Guests from './pages/Guests'
import HouseKeeping from './pages/HouseKeeping'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
       <Route path='/guests' element={<Guests/>}/>
        <Route path='/housekeeping' element={<HouseKeeping/>}/>
     </Routes>
    </>
  )
}

export default App
