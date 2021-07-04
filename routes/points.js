const express= require("express");
const loyaltyController = require("../controller/pointsController");
const router = express.Router();

router.route("/user/points/:id").get(loyaltyController.getpoints);
router.route("/user/points").post(loyaltyController.points);

module.exports = router;