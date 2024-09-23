import userModel from '../models/userModel.js'



const addToCart = async(req,res)=>{
    console.log("request body",req.body.userId)
    let userData = await userModel.findOne({_id:req.body.userId})
    if(!userData){
         return res.json({status:false,"message":"user not found"})
    }
    
    let cartData = await userData.cartData
    console.log(cartData[req.body.itemId])
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1
    }else{
        cartData[req.body.itemId]+=1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"item added sucessfully"})
}

const removeFromCart = async(req,res)=>{
    console.log("inside cart item")
    let userData = await userModel.findOne({_id:req.body.userId})
    let cartData = await userData.cartData
    if(cartData){
       if(cartData[req.body.itemId]==1){
        await userModel.findByIdAndUpdate(req.body.userId,{ $unset: { [`cartData.${req.body.itemId}`]: "" } })
        return res.json({success:true,message:"Item deleted successfully"})
       }
        cartData[req.body.itemId]-=1   
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"item deleted sucessfully"})
}

const getCart = async(req,res)=>{}


export {addToCart,removeFromCart,getCart}
