const express = require("express");
const router = express.Router();
const enquiryController = require("../controller/enquiryController");

router.route("/create-enquiry").post(enquiryController.insertEnquiry);
router.route("/get-enquiry-detail/:id").get(enquiryController.getEnquiry);
router.route("/delete-enquiry/:id").delete(enquiryController.DeleteEnquiry);
router.route("/edit-enquiry").put(enquiryController.EditEnquiry);
router.route("/get-user-enquiries/:user").get(enquiryController.UserEnquiry);
module.exports = router;