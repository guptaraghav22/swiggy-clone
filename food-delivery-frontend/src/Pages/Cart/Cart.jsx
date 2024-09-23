import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom'


let Cart = ()=>{
    let navigate = useNavigate()
    const{food_list,addToCart,removeToCart,cartItem,getTotalCartAmount,url} = useContext(StoreContext)
    let onCrossClick = (itemID)=>{
        
        removeToCart(itemID)
        

    }

    let placeOrder = ()=>{
        navigate("/order")
    }

    return(<>
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p className="p">Items</p>
                    <p className="p">Title</p>
                    <p className="p">Price</p>
                    <p className="p">Quantity</p>
                    <p className="p">Total</p>
                    <p className="p">Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item,index)=>{
                    if(cartItem[item._id]>0){
                        return (
                          <div>
                            <div className="cart-items-title cart-items-item">
                              <img src={url+"/images/"+item.image}></img>
                              <p>{item.name}</p>
                              <p>${item.price}</p>
                              <p>{cartItem[item._id]}</p>
                              <p>${item.price * cartItem[item._id]}</p>
                              <p className='cross' onClick={()=>onCrossClick(item._id)} >X</p>
                            </div>
                            <hr />
                          </div>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                        <div className="cart-total-details">
                          <p>Subtotal</p>
                          <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivey Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()+2}</b>
                        </div>
                        <button onClick={()=>{placeOrder()}}>Proceed To CheckOut</button>
                </div>
                <div className="cart-promo-code">
                    <div>
                        <p>If You Have A Code,Enter It Here...</p>
                        <div className="cart-promocode-input">
                            <input type='text' placeholder='promo-code'></input>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>)
}
export default Cart