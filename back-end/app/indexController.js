const userController = require("./controllers/userController");
const problemController = require("./controllers/problemController");
const executionController = require("./controllers/executionController");
var controllers = {};
controllers.user = userController;
controllers.problem = problemController;
controllers.execution = executionController;
module.exports = controllers;
