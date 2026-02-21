import { v2 as cloudinary } from 'cloudinary';
//import fs from 'fs';
// const uploadOnCloudinary = async(filepath) =>{
//     // Configuration
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
//     });
//     try {
//         if(!filepath){
//         return null;
//     }
//     // Uploading the file to cloudinary
//     const uploadResult = await cloudinary.uploader.upload(filepath);
//     // Deleting the file from the server after uploading to cloudinary
//     fs.unlinkSync(filepath);
//     return uploadResult.secure_url;
        
//     } catch (error) {
//         fs.unlinkSync(filepath); // Delete the file even if upload fails
//         console.log(error);
//     }
// }
const uploadOnCloudinary = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result.secure_url);
            }
        ).end(fileBuffer);
    });
};

export default uploadOnCloudinary;


