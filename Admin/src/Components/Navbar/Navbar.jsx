import React from 'react'
import './Navbar.css'
import srEnterprises from '../../assets/srEnterprises.jpg'
//import srEnterprises from "../../assets/srEnterprises.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={srEnterprises} alt="" className='nav-logo' />
      <h1>ADMIN - PROTAL</h1>
    </div>
  )
}

export default Navbar
