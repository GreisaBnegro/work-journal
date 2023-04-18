const userController = require("./controllers/userController");
const problemController = require("./controllers/problemController");
var controllers = {};
controllers.user = userController;
controllers.problem = problemController;
module.exports = controllers;