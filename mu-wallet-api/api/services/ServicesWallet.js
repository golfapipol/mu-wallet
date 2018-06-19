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

  getBalanceByAccountNo: function (account_number) {
    return MongoClient.connectAsync(mgServer)
      .then((db) =>
          db.collection(mgUser)
          .find({
            "user_account_number": account_number
          })
          .toArray()
          .then((result) => {
            if (result.length > 0) {
              return result;
            } 
            return null;
          })
          .catch(function (err) {
            console.log(err);
          })
      )
      .catch(function (err) {
        console.log(err);
      })

  },

  checkSenderBalanceCanTransfer: function (balance, amount) {
    if (balance - amount >= 0) {
      return true;
    } 
    return false;
  },

  checkReceiverBalanceCanReceive: function (balance, amount) {
    if (balance + amount <= 5000) {
      return true;
    } 
    return false;
  },

  setNewBalanceByAccountNo: function (account_number, new_balance) {
    return MongoClient.connectAsync(mgServer)
      .then((db) => 
        db.collection(mgUser).update({
          "user_account_number": +account_number
        }, {
          $set: {
            "user_amount": new_balance
          }
        }, 
        {
          upsert: true
        })
        .then((result) => true)
        .catch(function (err) {
          console.log(err);
        })
      )
      .catch(function (err) {
        console.log(err);
      })

  },
}
