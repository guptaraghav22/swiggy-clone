import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let Add = (props) => {
  let [image, setImage] = useState(false);
  let [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  let onChangeHandler = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  let onSubmitHandler = async(event)=>{
    
    event.preventDefault(); 
    let url = props.url
    let formData = new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",data.price)
    formData.append("category",data.category)
    formData.append("image",image)
    
     await axios
      .post(`${url}api/food/add`, formData).then((res)=>{
        setData({
            name: "",
            description: "",
            price: "",
            category: "Salad",

        })
        setImage(false)
        toast.success("Data Registered")
        
      }).catch((err)=>{
        toast.error("Error While Registering Data")
    })
    

   
     
    
 
  }

 

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            ></img>{" "}
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            required
            hidden
          ></input>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            onChange={(e) => {
              onChangeHandler(e);
            }}
            value={data.name}
            name="name"
            placeholder="Type here"
          ></input>
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            type="text"
            name="description"
            onChange={(e) => {
              onChangeHandler(e);
            }}
            value={data.description}
            rows="6"
            placeholder="Write Content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="category"
              value={data.category}
            >
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
            <p>Product Price</p>
            <input
              type="Number"
              value={data.price}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Add;
