import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import product_cart_icon from '../../assets/Product_Cart.svg'
import product_list_icon from '../../assets/Product_list_icon.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
            <img src={product_cart_icon} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
            <img src={product_list_icon} alt="" />
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
