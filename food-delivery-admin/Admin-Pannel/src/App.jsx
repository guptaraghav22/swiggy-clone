import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/sidebar"
import { Routes,Route } from "react-router-dom"
import List from "./Pages/List/List"
import Add from "./Pages/Add/Add"
import Orders from "./Pages/Orders/Orders"
let App = ()=>{
  let url = "http://localhost:4000/"
  
  return(
  <>
  <Navbar/>
  <hr/>
  <div className="app-content">
    <Sidebar/>
    <Routes>
    <Route path="/list" element={<List url={url}/>} ></Route>
    <Route path="/add" element={<Add url={url}/>} ></Route>
    <Route path="/order" element={<Orders url={url}/>} ></Route>
  </Routes>
  </div>

  </>)
}
export default App