const { MongoClient, ServerApiVersion } = require('mongodb');
const Express =require("express");
const cors = require("cors");
const BodyParser=require("body-parser");

const uri = "mongodb+srv://mjyoon:mjyoon@cluster0.3iesq6d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const server = Express();