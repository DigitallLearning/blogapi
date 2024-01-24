const express=require("express")
const app=express()
const cors=require("cors")
require("./mongoose")
app.use(express.json())
app.use(cors())
const ImageModel=require("./blogModel")
const multer=require("multer")
app.use(express.static("public"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"public/uploads/" );
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname);
    }
  });
  const upload = multer({ storage: storage }).single("bimage");

  app.post("/",(req,resp)=>
  {
     upload(req,resp,(err)=>{
             const newImage=new ImageModel({  
                 bid:req.body.bid,   
                 bname:req.body.bname,
                 bdesc:req.body.bdesc,
                 bcat:req.body.bcat,
                 bimage:"https://blog-cz01.onrender.com/uploads/"+req.file.filename
             })
              newImage.save()
              resp.send("File Uploaded")
         
     })
  })
  app.get("/",async(req,resp)=>{
    const data=await ImageModel.find()
    resp.send(data)
  })
  app.listen(4000)