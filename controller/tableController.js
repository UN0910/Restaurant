const Table = require("../model/TableModel");

exports.createTable = (req, res) => {
  const { capacity, mergeable, current_status } = req.body;
  let newTable = new Table({
    capacity: capacity, mergeable: mergeable, current_status: current_status
  })
  newTable.save().then(found => {
    res.json({ error: false, data: "Successfully" })
  }).catch(err => {
    res.status(503).json({ error: true, data: 'Something went wrong with db', errMsg: err })
  })

}
exports.editTable = (req, res) => {
  const { capacity, mergeable, current_status } = req.body;
  Table.findByIdAndUpdate(req.params.id, {
    capacity: capacity, mergeable: mergeable, current_status: current_status
  }).then(found => {
    res.json({ error: false, data: "Updated" })
  }).catch(err => {
    res.status(503).json({ error: true, data: 'Something went wrong with db', errMsg: err })
  })

}
exports.changeTableStatus = (req, res) => {
const {id,status}=req.query
  Table.findByIdAndUpdate(id, {
    current_status: status
  }).then(found => {
    res.json({ error: false, data: "Updated" })
  }).catch(err => {
    res.status(503).json({ error: true, data: 'Something went wrong with db', errMsg: err })
  })
}