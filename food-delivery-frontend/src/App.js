import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/Placeorder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Components/LoginPopup/LoginPopUp";

const App = () => {
  let [showLoginPopUp, setShowLoginPopUp] = useState(false);
  return (
    <>
        {showLoginPopUp?<div className="pop-up-container"> <LoginPopUp setShowLoginPopUp={setShowLoginPopUp}/></div>:<></> }
      <div className="app">
        <BrowserRouter>
        <Navbar setShowLoginPopUp={setShowLoginPopUp} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<PlaceOrder />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default App;
