const express= require("express");
const loyaltyController = require("../controller/loyaltypointsController");
const router = express.Router();

router.route("/user/loyaltypoints/:id").get(loyaltyController.getLoyaltyPoints);
router.route("/user/loyaltypoints").post(loyaltyController.LoyaltyPoints);

module.exports = router;