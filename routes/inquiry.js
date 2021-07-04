const express = require("express");
const router = express.Router();
const inquiryController = require("../controller/inquiryController");

router.route("/inquiry").post(inquiryController.insertInquiry);
router.route("/inquiry/:id").get(inquiryController.getInquiry);
module.exports = router;