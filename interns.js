const assert= require("assert");
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("Caleb_Jesusegun");

  dbo.collection("myMovies").insertMany([
    {movie : "The Banker", year : "2020", rating : 8}, 
    {movie : "Bad Boys", year : "2020", rating : 7}, 
    {movie : "The Hunt", year : "2020", rating : 7}, 
    {movie : "Bloodshot", year : "2020", rating : 7.5}, 
    {movie : "First Cow", year : "2020", rating : 6.5} 
    ], function(err, result) {
    if (err) throw err;
    
    assert.equal(err, null);    
    assert.equal(5, result.result.n);    
    assert.equal(5, result.ops.length);
    console.log("Number of documents inserted: " + result.insertedCount);
    console.log(result);
    db.close();
  });
});
