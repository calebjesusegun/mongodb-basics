var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/Caleb_Jesusegun"; 
MongoClient.connect(url, function(err, db) {  if (err) throw err;  
    console.log("Database created by Caleb_Jesusegun!");  
    db.close();
}); 
 