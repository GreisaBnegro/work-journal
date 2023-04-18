const express = require("express");
const router = express.Router();
const { problem } = require("../indexController");

router.get("/", problem.getAll);
// router.get("/id/:userid", problem.getUserId);
// router.get("/name/:fullname", problem.getUsername);
// router.post("/", problem.createNew);
// router.put("/", problem.editAt);
// router.delete("/", problem.deleteUser);

module.exports = router;