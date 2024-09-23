import { createContext, useEffect } from "react";
// import { food_list } from "../Assets/assets";
import {useState} from 'react'
import axios from "axios";
export const  StoreContext = createContext(null)

 let StoreContextProvider = (props)=>{
     let[cartItem,setCartItem] = useState({})
     const [token,setToken] = useState("") 
     const [food_list,set_food_list] = useState([])
     const url = "http://localhost:4000"
     useEffect(()=>{
    
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }

        }
        loadData()
     })
     const fetchFoodList = async () =>{
        const response = await axios.get(url+"/api/food/list")
        console.log("response",response)
        set_food_list(response.data.data)
     }

     let addToCart=(itemId)=>{
            if(!cartItem[itemId]){
             
                setCartItem((prev)=>({...prev,[itemId]:1}))
            }else{
                setCartItem((prev)=>({...prev,[itemId]:cartItem[itemId]+1}))
            }
        

        }
        let removeToCart = (itemId)=>{
            setCartItem((prev)=>({...prev,[itemId]:cartItem[itemId]-1}))
        }
        let getTotalCartAmount = ()=>{
            let totalAmount = 0;
            for(const item in cartItem){
                if(cartItem[item] > 0){
                    let itemInfo = food_list.find((product)=> product._id === item);
                    totalAmount += itemInfo.price * cartItem[item];
                }
            }
            return totalAmount;
        }
        
        const contextValue ={food_list,addToCart,cartItem,setCartItem,removeToCart,getTotalCartAmount,url,token,setToken}
   

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider

