const express = require("express");
const router = express.Router();
const { execution } = require("../indexController");

router.get("/", execution.getAll);
router.post("/", execution.createNew);
// router.get("/id/:userid", problem.getUserId);
// router.get("/name/:fullname", problem.getUsername);
// router.put("/", problem.editAt);
// router.delete("/", problem.deleteUser);

module.exports = router;