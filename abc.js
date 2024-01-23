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
  const upload = multer({ storage: storage }).single("image");

  app.post("/",(req,resp)=>
  {
     upload(req,resp,(err)=>{
             const newImage=new ImageModel({     
                 name:req.body.name,
                 image:"localhost:4000/uploads/"+req.file.filename
             })
              newImage.save()
              resp.send("File Uploaded")
         
     })
  })
  app.listen(4000)