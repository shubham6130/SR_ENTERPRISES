import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { type } from "os";

const DB_NAME = "SR_Enterprises";
const PORT = process.env.PORT || 4001;
const app = express();


app.use(express.json());
app.use(cors());









// database connection and app is started
const connectDB = async() => {
   try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected ! DB host: ${connectionInstance.connection.host}`);
   } 
   catch (error) {
        console.log("mongo DB connection error",error);
        process.exit(1);
   }
};

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log("mongodb connection error",err)
})











// API Creation
app.get("/",(req,res)=>{
    res.send('Express app is running');
});


/*

// this is wrong because app.get will run always as soon the server has started
// now as it run then it will run handleHomepageRequest function as we are calling that function in first example , 
// but we want this should run only when some request is made , 
// so second version is correct.
// understand reference of the function(defination of function) and calling the function
// in second example when the req has come then this function will be called.


app.get("/",handleHomepageRequest){
    handleHomepageRequest(req,res);  //calling the function 
}

function handleHomepageRequest(req,res){
res.send('Express app is running');
}


//This is right

app.get("/",handleHomepageRequest);  // reference of the function 

function handleHomepageRequest(req,res){
res.send('Express app is running');
}

*/

// Image storage engine
const storage = multer.diskStorage({ 
    destination: './upload/images',
    filename: (req,file,cb)=>{ return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)}
});
// cb is callback function 
// we want this function should execute when post request comes

const upload = multer({storage: storage});


// creating upload endpoint for the images, express.static('upload/images') tell the path.
app.use('/images',express.static('upload/images'));
// upload.single('product') middleware.
// we send the post request with file
// this middleware will upload the file to diskstorage
// this middleware will also change the name of file
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    });
});









// now we will create the end point that will upload on mongodb
// before we have to create the schema
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    }

})

// api for adding products
app.post('/addproduct',async(req,res)=>{
    // getting all the product in array form database
    // don't forget the await for the database operations
    let products = await Product.find({});
    //console.log(products);
    //console.log(products.length);
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        console.log(last_product_array);
        let last_product = last_product_array[0];
        console.log(last_product);
        id = last_product.id + 1;
    }
    else
    {
        id=1;
    }


    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    //console.log(product);
    await product.save(); //this will automatically save data in database
    //console.log("Saved");
    // now we will generate response for frontend
    res.json({
        success: true,
        name: req.body.name,
    });
});








// api for deleting products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Remove");
    res.json({
        success:true,
        name: req.body.name,
    });
});









// api to display all product in database
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("all product fetched");
    res.send(products);
});














