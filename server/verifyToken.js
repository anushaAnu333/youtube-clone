const jwt=require("jsonwebtoken")
const { createError } = require("./error")
const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token
    if(!token) return next(createError(404),"you are not authenticated")
    jwt.verify(token,process.env.jwt,(err,user)=>{
        if(err) return next(createError(403,"Token is not valid"))
        req.user=user
        next()
    })
}
module.exports={verifyToken}