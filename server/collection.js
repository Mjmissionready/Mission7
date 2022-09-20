const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://minjuy:minjuy@cluster0.3iesq6d.mongodb.net/property";



MongoClient.connect(url, function (err, db) {

    if (err) throw err;

    var dbo = db.db("Property");

    dbo.listCollections().toArray(function (err, collectionInfos) {

        console.log(collectionInfos);

        db.close();

    });

});