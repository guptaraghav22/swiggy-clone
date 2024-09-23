import { assets } from "../../Assets/assets";
import { useContext, useEffect, useState } from "react";
import './LoginPopUp.css'
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";
let LoginPopUp = ({ setShowLoginPopUp }) => {
  const {url,token,setToken} = useContext(StoreContext)
  let [currentState, setCurrentState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url;
    if(currentState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLoginPopUp(false)

    }
    else{
      alert(response.data.message)
    }
  }
  return (
    <>
      <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img
              onClick={() => setShowLoginPopUp(false)}
              src={assets.cross_icon}
            ></img>
          </div>
          <div className="login-popup-inputs">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input placeholder="Your Name" name="name" onChange={onChangeHandler} value={data.name} required></input>
            )}
            <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="email" required></input>
            <input type="password" onChange={onChangeHandler} name="password" value={data.password}  placeholder="password" required></input>
          </div>
          <button type="submit">
            {currentState === "Login" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" className="checkbox" required />
            <p>By Continuing,I agree to the terms of use & privacy policy</p>
          </div>
          {currentState == "Login" ? (
            
            <p className="createAccount">
              Create A New Account?
              <p className="signUp"
                onClick={() => {
                  setCurrentState("Sign Up");
                }}
              >
                Sign-up
              </p>
            </p>
            
          ) : (
            <p className="createAccount" 
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Already have an Account?<p className="signUp" >Login</p>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopUp;
