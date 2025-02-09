import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../admin_assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';


function Add({url}) {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",

  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  const onSumbitHandler = async (event) => {
    event.preventDefault();


    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);  // ✅ Removed Number()
    formData.append("image", image);

    const result = await axios.post(`${url}/api/food/add`, formData);
    console.log(result.data);  // ✅ Correct logging

    if (result.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(null);
      toast.success(result.data.message);
    }
    else {
      toast.error(result.data.message)
    }
  };



  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSumbitHandler}>
        <div className="add-img-upload  flex-col" >
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required />
        </div>
        <div className="add-product-description flex-col">
          <p> Product descripyion</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='write content here' required />
        </div>

        <div className="add-category-price">
          <div className="add-category  flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} value={data.category} name='category'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20' />
          </div>
        </div>
        <button className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add