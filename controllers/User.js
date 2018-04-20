'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.getEventEidSansSidPlacePid = function getEventEidSansSidPlacePid (req, res, next) {
  User.getEventEidSansSidPlacePid(req.swagger.params, res, next);
};

module.exports.getUserUidOrderOidTickets = function getUserUidOrderOidTickets (req, res, next) {
  User.getUserUidOrderOidTickets(req.swagger.params, res, next);
};

module.exports.getUserUidOrders = function getUserUidOrders (req, res, next) {
  User.getUserUidOrders(req.swagger.params, res, next);
};

module.exports.getUserUidPayments = function getUserUidPayments (req, res, next) {
  User.getUserUidPayments(req.swagger.params, res, next);
};

module.exports.getUserUidTickets = function getUserUidTickets (req, res, next) {
  User.getUserUidTickets(req.swagger.params, res, next);
};

module.exports.postUserOrderOidPay = function postUserOrderOidPay (req, res, next) {
  User.postUserOrderOidPay(req.swagger.params, res, next);
};

module.exports.postUserUidOrder = function postUserUidOrder (req, res, next) {
  User.postUserUidOrder(req.swagger.params, res, next);
};

module.exports.postUserUidRenderpdf = function postUserUidRenderpdf (req, res, next) {
  User.postUserUidRenderpdf(req.swagger.params, res, next);
};
