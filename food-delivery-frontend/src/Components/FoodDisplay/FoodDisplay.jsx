import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import FoodItem from "../../Components/FoodItem/FoodItem";

let FoodDisplay = (props) => {
 
  let { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((data, index) => {
         
          if(props.category=="all"||props.category ==data.category ){

            return <FoodItem data={data} />
          }

      })}
      </div>
    </div>
  );
};

export default FoodDisplay;
