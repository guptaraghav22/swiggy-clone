import "../Navbar/navbar.css";
import { assets } from "../../Assets/assets";
import { useContext, useState } from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { StoreContext } from "../../Context/storeContext";
const Navbar = ({setShowLoginPopUp}) => {
   
    let [menu, setMenu] = useState("");
    let {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const navigate = useNavigate();


    const logout = () =>{
      
      localStorage.removeItem("token")
      setToken("")
      navigate("/")
    }

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="" className="logo" id="logo" /></Link>
      <ul className="navbar-menu">
        <a href="#logo"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          home
        </a>
        <a href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          menu
        </a>
        <a href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </a>
        <a href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
        <Link to="/cart"><img src={assets.basket_icon}></img>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </Link>
        </div>
        {
          !token?<button onClick={()=>setShowLoginPopUp(true)}>Sign In</button>:<div className="navbar-profile">
            <img src={assets.profile_icon} alt="" ></img>
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt=""></img><p>Orders</p></li>
              <hr/>
              <li onClick={logout}><img src={assets.logout_icon} alt=""></img><p>Logout</p></li>
            </ul>
          </div>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
