import mongoose, { mongo } from "mongoose";



const DBConnection=async()=>{

    const MONGODB_URL=`mongodb+srv://user:codeforinterview@file-sharing.uuyj3xd.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONGODB_URL,)
        console.log("database connected successfully")

    }catch(error){
        console.log("error while connecting with the database",error.message);
    }

}

export default DBConnection;