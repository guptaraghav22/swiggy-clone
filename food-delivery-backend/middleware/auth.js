import jwt from 'jsonwebtoken'

const authMiddleware = async(req,res,next)=>{
    console.log("inside auth middleware")
    const {token} = req.headers;
    console.log(token)
    if(!token){
        res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log("decoded token",token_decode)
        req.body.userId = token_decode.userId
        next()
        
    }catch(err){
        res.send({success:false,message:"Error"})
    }

}

export default authMiddleware