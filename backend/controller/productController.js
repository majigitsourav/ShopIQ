import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

export const addProduct = async(req,res)=>{
    try {
        if (!req.files || !req.files.image1) {
            return res.status(400).json({ message: "Images not received" });
        }
        let {name,description,price,category,subCategory,sizes,bestseller} = req.body;
        let image1 = await uploadOnCloudinary(req.files.image1[0].buffer);
        let image2 = await uploadOnCloudinary(req.files.image2[0].buffer);
        let image3 = await uploadOnCloudinary(req.files.image3[0].buffer);
        let image4 = await uploadOnCloudinary(req.files.image4[0].buffer);

        let productData = {
            name,
            description,
            price : Number(price),
            category,
            subCategory,
            sizes : JSON.parse(sizes),
            date : Date.now(),
            bestseller : bestseller === "true" ? true : false,
            image1,
            image2,
            image3,
            image4
        }
        const product = await Product.create(productData);
        return res.status(201).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : `Add Product Error ${error.message}`});
    }

}

//API for listing all the products from the database and sending the response back to the client with the list of products and if there is any error we are sending the error message back to the client with a status code of 500 and we are also logging the error message in the console for debugging purposes
export const listProduct = async (req,res)=>{
    try {
        const product = await Product.find({});
        return res.status(200).json(product);
    } catch (error) {
        console.log("List Product Error");
        return res.status(500).json({message:`List Product Error ${error}`})
        
    }
}

// API for removing the product from the database and also we are deleting the images from the cloudinary as well to save the storage space on the cloud and also we are sending the response back to the client with the removed product object and if there is any error we are sending the error message back to the client with a status code of 500 and we are also logging the error message in the console for debugging purposes
export const removeProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message:`Remove Product Error ${error}`})
    }
}
