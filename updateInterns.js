const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   var oldMovie = { movie: "The Banker" };
   var updateMovie = { $set: {movie: "MONEY HEIST", year: "2017", rating: 10 } };
   dbo.collection("customers").updateOne(oldMovie, updateMovie, function(err, res) {
     if (err) throw err;
     console.log("1 document updated");
     console.log(res);
     db.close();
   });
});