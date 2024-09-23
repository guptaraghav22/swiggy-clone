import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Header from '../../Components/Header/Header'
import './Home.css'
import { useState } from 'react'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
let Home = ()=>{
     let [category,setCategory] = useState("all")
     
    return(
        <>
        <Header />   
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/> 
        </>
    )
}


export default Home