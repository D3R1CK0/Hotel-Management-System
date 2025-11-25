import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Register from './pages/Register'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </>
  )
}

export default App
