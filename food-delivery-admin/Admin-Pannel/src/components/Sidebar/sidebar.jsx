import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
let Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img src={assets.add_icon}/>
                    <p>Add Item</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <img src={assets.order_icon}/>
                    <p>List Item</p>
                </NavLink>
                <NavLink to='/order' className="sidebar-option">
                    <img src={assets.order_icon}/>
                    <p>Order Item</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar