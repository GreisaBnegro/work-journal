const userController = require("./controllers/userController");
const problemController = require("./controllers/problemController");
const executionController = require("./controllers/executionController");
const statusController = require("./controllers/statusController");

var controllers = {};
controllers.user = userController;
controllers.problem = problemController;
controllers.execution = executionController;
controllers.status = statusController;
module.exports = controllers;
