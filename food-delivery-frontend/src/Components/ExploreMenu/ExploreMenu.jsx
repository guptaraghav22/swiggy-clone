import "./ExploreMenu.css";
import { menu_list } from "../../Assets/assets";
import { useEffect, useState } from "react";
let ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="explore-menu" >
      <hr />
      <h1 id="explore-menu" >Explore Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu, offering a wide array of options to suit
        every taste. Whether you're in the mood for action-packed adventures,
        heartfelt dramas, captivating documentaries, or entertaining comedies,
        our selection ensures there's something for everyone. Dive into your
        favorite genre today!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            
          return (
            <div
              //  onClick={() => setCategory(prev => (prev !== item.menu_name ? item.menu_name : "all"))}
              // onClick={()=>setCategory((prev)=>(prev!==category?"all":item.menu_name))}
              onClick={() =>{
                setCategory((prev) => {
                    {console.log(prev)}
                //   return prev !== category ? "all" : item.menu_name;
                return prev !== item.menu_name ? item.menu_name : "all";
                }
            )
            
        }
            
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category == item.menu_name ? "actives" : ""}
                src={item.menu_image}
              ></img>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default ExploreMenu;
