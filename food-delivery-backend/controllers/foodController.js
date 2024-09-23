import { deserialize } from "v8";
import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_fileName = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_fileName,
  });
  try {
    await food
      .save()
      .then((data) => console.log("Data Saved Sucessfully", data))
      .catch((err) => console.log(err, "error in saving"));

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.send({ success: false });
  }
};

//remove foodItem
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById({ _id: req.body.id });

    fs.promises.unlink(`uploads/${food.image}`);

    foodModel.deleteOne({ _id: req.body.id }).then(() => {
      res.json({ success: true, message: "food removed" });
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

export { addFood, listFood, removeFood };
