const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    name:String,
    image:String
})
module.exports=mongoose.model("students",blogSchema)