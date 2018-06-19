var Promise = require('bluebird');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Collection = mongodb.Collection;
var objID = require('mongodb').ObjectID;
var mgServer = 'mongodb://localhost:27017/MUWallet';
var mgUser = 'User';
Promise.promisifyAll(mongodb);
var MongoClient = mongodb.MongoClient;

module.exports = {
  testGetBalance: function (account_number) {
    return MongoClient.connectAsync(mgServer)
      .then(function (db) {
        return db.collection(mgUser).find({
            "user_account_number": account_number
          }).toArray()
          .then(function (result) {
              console.log(result);
            if (result.length > 0) {
              return result;
            }
          })
          .catch(function (err) {
            console.log(err);
          })
      })
      .catch(function (err) {
        console.log(err);
      })

  },
}
