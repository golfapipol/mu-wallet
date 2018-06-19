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

    var account_sender = ServicesWallet.getBalanceByAccountNo(+account_no_sender);
    var account_receiver = ServicesWallet.getBalanceByAccountNo(+account_no_receiver);
    //var 
    Promise.all([account_sender,account_receiver]).then(function(data){
      var sender_balance =data[0][0].user_amount;
      var receiver_balance = data[1][0].user_amount;
      var is_sender_can_transfer = ServicesWallet.checkSenderBalanceCanTransfer(sender_balance, amount);
      var is_receiver_can_receive = ServicesWallet.checkReceiverBalanceCanReceive(receiver_balance, amount);

      Promise.all([is_sender_can_transfer,is_receiver_can_receive]).then(function(can_transfer){
        if(is_sender_can_transfer && is_receiver_can_receive){
          var new_sender_balance = sender_balance - amount;
          var new_receiver_balance = receiver_balance + amount;
          var update_sender_balance = ServicesWallet.setNewBalanceByAccountNo(account_no_sender, new_sender_balance);
          var update_sender_balance = ServicesWallet.setNewBalanceByAccountNo(account_no_receiver, new_receiver_balance);
          Promise.all([is_sender_can_transfer,is_receiver_can_receive]).then(function(result){
            return res.send(200);
          })
        }
      })
      //console.log(sender_amount);
    });

  },

};
