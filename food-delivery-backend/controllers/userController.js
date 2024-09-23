import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login

let loginUser = async (req, res) => {
    const {email,password} = req.body
   
    let user  = await userModel.find({email:email})
    
   
    if (!user) {
       return res.json({success:false,message:"User Already Registered"})
    }
    const isMatched = await bcrypt.compare(password,user[0].password)
    if(!isMatched){
       return res.json({success:false,message:"Please enter a valid password"})
    }

    let token = await generateJwtToken(user[0]._id)
    res.json({success:true,token:token})

};
let generateJwtToken = async (userId) => {
  console.log(userId,"user id ")
  let token = await jwt.sign({ userId }, process.env.JWT_SECRET_KEY);
  return token;
};

//register user

let registerUser = async (req, res) => {
  const { name, password, email } = req.body;


  try {
    const exists = await userModel.findOne({ email: email });
    if (exists) {
      return res.json({ success: false, Message: "User Already Exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }
    //gen salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    newUser.save()
    let token = await generateJwtToken(newUser._id);

    res.json({ success: true, token });
  } catch (err) {
    res.json({ success: false, message: "Error while registering" });
  }
};

export { loginUser, registerUser };
