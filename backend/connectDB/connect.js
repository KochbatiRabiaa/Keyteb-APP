const monngoose=require('mongoose')
 require('dotenv').config()
  
 const connect=()=>{
  monngoose.connect(process.env.mongoUrl)
  .then(()=>(console.log('connected to database')))
  .catch((err)=>console.log('error',err))
 }

 module.exports= connect