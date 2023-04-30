import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import { upload } from './middlewares/upload.js';

import {
  getOneproductController,
  getAllProductsController,
  addProductController,
  updateProductController,
  deleteProductController,
} from "./controllers/Product.js"; 
dotenv.config();
const {PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env
const app = express();
mongoose.set('strictQuery', false);


app.use(express.json());
app.use(express.static("client/build"))

app.use(cors());
app.use(cors({
  origin: ["http://localhost:3000"]
}))

//MODEL
app.post("/api/addProduct",upload.single('image'),addProductController);
app.get("/api/products", getAllProductsController);
app.get("/api/productId/:productId", getOneproductController);
app.put("/api/updateProduct/:productId", updateProductController);
app.delete("/api/deleteProduct/:productId", deleteProductController);


//mongodb+srv://chanabuton:<password>@cluster0.gis9gve.mongodb.net/test
app.get("*",(req,res)=>{
  res.sendFile(__dirname, "\client\build\index.json");
});

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {useNewUrlParser:true,useUnifiedTopology: true,wtimeout: 30000 },
  (err)=>{
    app.listen(PORT||8000,()=>{
      console.log("err",err);
      console.log("listen")
    })
  }
)