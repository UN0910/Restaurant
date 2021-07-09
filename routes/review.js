const express = require("express");
const router = express.Router();
const reviewController = require("../controller/reviewController");

router.route("/review").post(reviewController.submitReview);
router.route("/update-review").patch(reviewController.updateReview);
router.route("/review/:id").get(reviewController.getReview);
router.route("/review/:id").delete(reviewController.deleteReview);

module.exports = router;