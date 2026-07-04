import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://greatstack:97708194@cluster0.wr03ynv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
        
    } catch (error) {
        console.error("MongoDB Error:", error);
    }
};
//mongodb+srv://greatstack:<db_password>@cluster0.wr03ynv.mongodb.net/?appName=Cluster0
