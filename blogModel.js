const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    bid:Number,
    bname:String,
    bdesc:String,
    bcat:String,
    bimage:String
})
module.exports=mongoose.model("students",blogSchema)