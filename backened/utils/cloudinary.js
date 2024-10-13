import {v2 as cloudinary} from "cloudinary";
import getDataUri from "../utils/datauri.js";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

// cloudinary.uploader.upload(, {
//     resource_type: 'raw',  // Specify raw type for non-image files like PDFs
//   }, (error, result) => {
//     if (error) {
//       console.error('Error uploading PDF:', error);
//     } else {
//       console.log('PDF uploaded successfully:', result.secure_url);
//     }
//   });

export default cloudinary;