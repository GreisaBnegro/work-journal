const express = require("express");
const router = express.Router();
const controller = require("../indexController");

router.get("/", controller.status.getAll);

module.exports = router;