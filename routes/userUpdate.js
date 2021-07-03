var express = require("express");
var router = express.Router();
var updateController = require("../controller/userUpdateController");

router.route("/user/update").patch(updateController);

module.exports = router;