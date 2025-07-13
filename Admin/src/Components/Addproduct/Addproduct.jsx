import React, {useState} from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {

  const [image,setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"DryFruit",
    new_price:"",
    old_price:""
  });

  const imageHandler = (e) =>{
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }

  const Add_Product = async()=>{
    //console.log(productDetails);
    // first we will upload image at our endpoint so that we get out image url so that we can use this to save in mono db url
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    // we have to send this form data to our api to get image url
    await fetch('http://localhost:4000/upload',{
      method: 'POST',
      headers: {Accept: 'application/json'},
      body: formData
    }).then((resp)=>resp.json())
    .then((data)=>{responseData=data})
    .catch((error) => { console.error("Error:", error);});

    // remember in resp we get success and image url
    if(responseData.success)
    {
      product.image = responseData.image_url;
      //console.log(product);
      // now we will add it to mongo db
      await fetch('http://localhost:4000/addproduct',{
      method: 'POST',
      headers: {Accept: 'application/json','Content-type': 'application/json'},
      body: JSON.stringify(product),
    }).then((resp)=>resp.json()).then((data)=>{
      data.success?alert('product added'):alert('failed')
    })
    }
  }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector" id="">
            <option value="DryFruit">DryFruit</option>
            <option value="Nut">Nut</option>
            <option value="Seed">Seed</option>
        </select>
      </div>
       <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id="file-input" hidden />
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>

    </div>
  )
}

export default Addproduct
