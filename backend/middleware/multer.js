import multer from 'multer';
//This is the configuration for multer to store the uploaded files in the public folder with the original name of the file ,,cloudinary will be used to store the files in the cloud and the url of the file will be stored in the database
// let storage = multer.diskStorage({
//     destination:(req,res,cb)=>{
//         cb(null,'./public')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// });

// For production
const storage = multer.memoryStorage();


//This is the middleware that will be used to upload the file to the server
let upload = multer({storage:storage});
export default upload;
