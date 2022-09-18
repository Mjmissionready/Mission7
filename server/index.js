import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connec to MONGOOOOOO~")
    } catch (err) {
        throw err;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

//middleware
// app.use("/auth", authRoute);


app.listen(8080, () => {
    console.log("Connect~~~ YAYYY~")
})
