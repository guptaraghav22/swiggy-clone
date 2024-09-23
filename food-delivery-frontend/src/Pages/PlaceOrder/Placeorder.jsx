import './Placeorder.css'
import { StoreContext } from '../../Context/storeContext';
import { useContext } from 'react';

let Placeorder = ()=>{
    const{food_list,addToCart,removeToCart,cartItem,getTotalCartAmount} = useContext(StoreContext)
    return( 
        <form action="" className='place-order'>
            <div className="place-order-left">
                <p className="title">
                    Delivery Information
                </p>
                <div className="multi-fields">
                    <input type='text' placeholder='First Name'></input>
                    <input type='text' placeholder='Last name'></input>
                </div>
                <input type='email' placeholder='Email address'></input>
                <input type='text' placeholder='Street'></input>
                <div className="multi-fields">
                    <input type='text' placeholder='city'></input>
                    <input type='text' placeholder='state'></input>
                </div>
                <div className="multi-fields">
                    <input type='text' placeholder='Zip Code'></input>
                    <input type='text' placeholder='Country'></input>
                </div>
                <input type='text' placeholder='Phone'></input>
            </div>
            <div className="place-order-right">
            <div className="cart-total">
                    <h2>Cart Totals</h2>
                        <div className="cart-total-details">
                          <p>Subtotal</p>
                          <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivey Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
                        </div>
                        <button >Proceed To CheckOut</button>
                </div>
            </div>

        </form>
        )
}

export default Placeorder;