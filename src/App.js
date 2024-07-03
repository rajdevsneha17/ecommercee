import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Signup from "./pages/Signup"
import Login from './pages/Login'
import Main from "./pages/Main"
import SideMenu from './components/SideMenu'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    
   <div >
    <div><Navbar></Navbar></div>  
    <div><SideMenu></SideMenu></div>
    <Routes>
    <Route path="/signup" element={<Signup></Signup>}></Route> 
   
     
  
   
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>


    {/* <Route path='/' element={<Dashboard></Dashboard>}></Route> */}
    
   </Routes>
   </div>
  )
}

export default App
