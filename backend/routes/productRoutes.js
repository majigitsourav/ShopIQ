import express from 'express';
import upload from "../middleware/multer.js";
import { addProduct, listProduct } from '../controller/productController.js';
import adminAuth from '../middleware/adminAuth.js';
import { removeProduct } from '../controller/productController.js';
let productRoutes = express.Router();

// Here we are using multer middleware to upload the images to the server and then we are using cloudinary to upload the images to the cloud and then we are storing the url of the images in the database and then we are deleting the images from the server after uploading to cloudinary so that we can save the storage space on the server and also we are using the fields method of multer to upload multiple images at once and we are specifying the name of the fields and the max count of the files that can be uploaded for each field and then we are passing the addProduct controller function to handle the request and response of the add product route and in the addProduct controller function we are getting the data from the request body and then we are uploading the images to cloudinary and then we are creating a product object with the data and the urls of the images and then we are saving the product object to the database and then we are sending the response back to the client with the created product object and if there is any error we are sending the error message back to the client with a status code of 500 and we are also logging the error message in the console for debugging purposes  
productRoutes.post('/addproduct',upload.fields([
    {name : "image1", maxCount : 1},
    {name : "image2", maxCount : 1},
    {name : "image3", maxCount : 1},
    {name : "image4", maxCount : 1}
]), addProduct);

productRoutes.get('/list',listProduct);
productRoutes.post('/remove/:id',adminAuth,removeProduct);
export default productRoutes;
