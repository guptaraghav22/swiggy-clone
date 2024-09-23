import { useContext, useEffect, useState } from "react";
import { assets } from "../../Assets/assets";
import './FoodItem.css'
import { StoreContext } from "../../Context/storeContext";

let FoodItem = (foodItem) => {
  let[itemCount,setItemCount] = useState(0)
  let{addToCart,cartItem,setCartItem,removeToCart,url} = useContext(StoreContext)
  
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food_image" src={url+"/images/"+foodItem.data.image}></img>
        {!cartItem[foodItem.data._id]?<img onClick={()=>addToCart(foodItem.data._id)} className="add-icon-white" src={assets.add_icon_white}></img>:<div className="cart_btns">
            <img  src={assets.add_icon_green} onClick={()=>addToCart(foodItem.data._id)} ></img>
            {cartItem[foodItem.data._id]}
            <img  src={assets.remove_icon_red} onClick={()=>removeToCart(foodItem.data._id)}></img>
          </div>}
      </div>
       
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{foodItem.data.name}</p>
            <img src={assets.rating_starts}></img>
        </div>
        <p className="food-item-desc">{foodItem.data.description}</p>
        <p className="food-item-price">${foodItem.data.price}</p>
      </div>
    </div>
  );
};
export default FoodItem;
