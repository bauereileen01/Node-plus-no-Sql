var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("mydb");
//  var myobj = [
//    { _id: 154, name: 'Chocolate Heaven'},
//    { _id: 155, name: 'Tasty Lemon'},
//    { _id: 156, name: 'Vanilla Dream'}
//  ];
//  dbo.collection("products").insertMany(myobj, function(err, res) {
//    if (err) throw err;
//    console.log(res);
//    db.close();
//  });
//}); 

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("mydb");
//  dbo.collection("customers").findOne({}, function(err, result) {
//    if (err) throw err;
//    console.log(result.name);
//    db.close();
//  });
//}); 

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("mydb");
//  dbo.collection("customers").find({}).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    db.close();
//  });
//}); 

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("mydb");
//  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    db.close();
//  });
//}); 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
//    db.close();
  });
}); 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
//    db.close();
  });
}); 

// If you specify both 0 & 1 values in the same object (except if one of the fields is the _id field) throws error. ex:
//  dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) { throws error;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
    if (err) throw err;
//    console.log(result);
    db.close();
  });
}); 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 