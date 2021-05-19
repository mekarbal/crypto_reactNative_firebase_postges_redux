const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/add/:id", userController.addUser);
router.get("/find/:id", userController.findUser);

module.exports = router;
