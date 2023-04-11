const express = require("express");
const router = express.Router();
const controller = require("../indexController");

router.get("/", controller.user.getAll);
router.get("/id/:userid", controller.user.getUserId);
router.get("/name/:fullname", controller.user.getUsername);
router.post("/", controller.user.createNew);
router.put("/", controller.user.editAt);
router.delete("/", controller.user.deleteUser);

module.exports = router;