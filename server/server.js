const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { authRoute } = require("./routes/auth.js");
const { propertyRoute } = require("./routes/property.js");
// import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.get("/", (req, res) => {
  res.send("it SHOUDL WORK!!!!!")
})

//middlewares

app.use(express.json())

app.use("/auth", authRoute)
app.use("/property/listing", propertyRoute)
// app.use(cookieParser())


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Hey, issues encounter!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.listen(8080, () => {
  connect()
  console.log("Connected to backend.");
});

// const port = process.env.PORT || 8080;

// app.listen(port, () => console.log(`Server running on port ${port}`));