/**
 * WalletController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
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
  getBalance: function (req, res) {
    var account_number = req.body.account_number;
    console.log(account_number);
    var client = MongoClient.connectAsync(mgServer)
      .then(function (db) {
        db.collection(mgUser).find({
            "user_account_number": parseInt(account_number,10)
          }).toArray()
          .then(function (result) {
            console.log(result);
            // if (result.length > 0) {
              return res.send(result);
            // } else res.send(null);
          })
          .catch(function (err) {
            console.log(err);
          })
      })
      .catch(function (err) {
        console.log(err);
      })

  },
  transfer: function (req, res) {
    var account_no_sender = req.body.account_no_sender;
    var account_no_receiver = req.body.account_no_receiver;
    var amount = +req.body.amount;

    var validSender = ServicesWallet.validateAccountNo(+account_no_sender);
    var validReceiver = ServicesWallet.validateAccountNo(+account_no_receiver);
    Promise.all([validSender,validReceiver]).then(function(data){
      console.log(data);
    });

  },

};
