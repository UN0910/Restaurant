const enquiry = require("../model/enquiry");

exports.insertEnquiry = (req, res) => {
    const message = new enquiry({ ...req.body });

    message.save((err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ message: "Enquiry Saved!", data: result });
        }
    });
}

exports.getEnquiry = (req, res) => {
    enquiry.findOne({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            // console.log(result);
            res.status(200).json({ data: result, message: "Enquiry fetched" });
        }
    });
}

exports.DeleteEnquiry = (req, res) => {

    enquiry.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            // console.log(result);
            res.status(200).json({ message: "enquiry deleted" });
        }
    });
}

exports.EditEnquiry = (req, res) => {

    enquiry.findOneAndUpdate({ _id: req.body._id }, req.body, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            // console.log(result);
            res.status(200).json({ message: "Enquiry edited", data: result });
        }
    });
}

exports.UserEnquiry = (req, res) => {
    const _id = req.params.user;

    enquiry.findOne({ customer: _id }, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            // console.log(result);
            res.status(200).json({ message: "Enquiry fetched", data: result });
        }
    });
}