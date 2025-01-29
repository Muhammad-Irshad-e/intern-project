
import './App.css'
import Userdb from './components/Userdb'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Admindb from './components/Admindb'
import Register from './components/Register'


function App() {

  return (
    <>
    <Navbar/><br /><br /><br />
    <Routes>
      <Route path='/signup' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/userdb' element={<Userdb/>} />
      <Route path='/admindb' element={<Admindb/>} />

    </Routes>
    </>
  )
}

export default App
