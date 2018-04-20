'use strict';

var url = require('url');


var Supervisor = require('./SupervisorService');


module.exports.getSupervisorSansSidTickets = function getSupervisorSansSidTickets (req, res, next) {
  Supervisor.getSupervisorSansSidTickets(req.swagger.params, res, next);
};

module.exports.postSupervisorTicketEnter = function postSupervisorTicketEnter (req, res, next) {
  Supervisor.postSupervisorTicketEnter(req.swagger.params, res, next);
};

module.exports.postSupervisorTicketVerify = function postSupervisorTicketVerify (req, res, next) {
  Supervisor.postSupervisorTicketVerify(req.swagger.params, res, next);
};
