const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("Caleb_Jesusegun");

  //FUNCTION TO RETURN THE FIRST DOCUMENT IN THE COLLECTION
  dbo.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log("THE FIRST DOCUMENT IN THE COLLECTION IS:");
    console.log(result);
    db.close();
  });

  //FUNCTION TO RETURN ALL MOVIES WITH A RATING OF 7
  const queryMovie = {rating : 7};
  dbo.collection("myMovies").find(queryMovie).toArray(function(err, result) {
   if (err) throw err;
   console.log("ALL THE MOVIES WITH A RATING OF 7 ARE:");
   console.log(result);
   db.close();
  });

  //FUNCTION TO RETURN ONLY MOVIES USING PROJECTION OBJECT
  dbo.collection("myMovies").find({}, { projection: { _id: 0, movie: 1} }).toArray(function(err, result) {
   if (err) throw err;
   console.log("ALL THE MOVIE TITLES ARE AS FOLLOWS: ");
   console.log(result);
   db.close();
 });




});