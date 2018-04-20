'use strict';

var url = require('url');


var Public = require('./PublicService');


module.exports.getAdvertises = function getAdvertises (req, res, next) {
  Public.getAdvertises(req.swagger.params, res, next);
};

module.exports.getCategories = function getCategories (req, res, next) {
  Public.getCategories(req.swagger.params, res, next);
};

module.exports.getCities = function getCities (req, res, next) {
  Public.getCities(req.swagger.params, res, next);
};

module.exports.getEventEid = function getEventEid (req, res, next) {
  Public.getEventEid(req.swagger.params, res, next);
};

module.exports.getEventEidSans = function getEventEidSans (req, res, next) {
  Public.getEventEidSans(req.swagger.params, res, next);
};

module.exports.getEvents = function getEvents (req, res, next) {
  Public.getEvents(req.swagger.params, res, next);
};

module.exports.getNews = function getNews (req, res, next) {
  Public.getNews(req.swagger.params, res, next);
};

module.exports.getPlaces = function getPlaces (req, res, next) {
  Public.getPlaces(req.swagger.params, res, next);
};

module.exports.postLogin = function postLogin (req, res, next) {
  Public.postLogin(req.swagger.params, res, next);
};

module.exports.postOidRedirect = function postOidRedirect (req, res, next) {
  Public.postOidRedirect(req.swagger.params, res, next);
};

module.exports.postRegister = function postRegister (req, res, next) {
  Public.postRegister(req.swagger.params, res, next);
};

module.exports.postSubscribe = function postSubscribe (req, res, next) {
  Public.postSubscribe(req.swagger.params, res, next);
};

module.exports.postVerify = function postVerify (req, res, next) {
  Public.postVerify(req.swagger.params, res, next);
};
