import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://RaghavGupta:xrjIbkhUaF5EFwBN@cluster0.xxfmqfs.mongodb.net/Food_delivery').then((req,res)=>{
        console.log("DB Connected")
    })
}



