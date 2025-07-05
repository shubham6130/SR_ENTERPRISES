import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import MyCart from '../Pages/MyCart'
import MyOrders from '../Pages/MyOrders'
import MyProfile from '../Pages/MyProfile'

function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/MyCart" element={<MyCart/>} />
        <Route path="/MyOrders" element={<MyOrders/>} />
        <Route path="/MyProfile" element={<MyProfile/>} />
      </Routes>
    </Router>
    
  )
}

export default App
