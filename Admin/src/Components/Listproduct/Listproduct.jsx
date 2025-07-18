import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const Listproduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  };

  // when this component is mounted then useeffect will run automatically
  useEffect(()=>{
    fetchInfo();
  },[]);

  const remove_product = async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers: {Accept: 'application/json','Content-type': 'application/json'},
      body: JSON.stringify({id:id}),
    });

    await fetchInfo();
  };

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>old_price</p>
        <p>new_price</p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className='listproduct-product-icon'/>
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className='listproduct-remove-icon' />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default Listproduct
