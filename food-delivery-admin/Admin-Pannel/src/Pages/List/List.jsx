import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./List.css";
let List = (props) => {
    let url = props.url
    
  const [list, setList] = useState([]);
  let localUrl = "http://localhost:4000";
  const fetchList = async () => {
    axios
      .get(`${url}/api/food/list`)
      .then((data) => {
        console.log(data.data.data);
        setList(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      console.log(list);
    }, 5000);
  };
  const removeFoodItem = async(foodId)=>{
   
    axios.post(`${url}api/food/delete`,{id:foodId}).then((res)=>{
        let newList= list.filter(item =>item._id!=foodId)
        setList(newList)
        toast.success("Item deleted")
    }
).catch((err)=>toast.error("error while deleting"))
  }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="list add flex-col">
        <p>All Food List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <img src={`${localUrl}/images/${item.image}`}></img>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p className="cursor" onClick={()=>removeFoodItem(item._id)}>X</p>
              </div>
            );
          })}
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default List;
