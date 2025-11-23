import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/Home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
