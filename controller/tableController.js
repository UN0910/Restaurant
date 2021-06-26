const Table = require("../model/TableModel");

exports.createTable=(req,res)=>{
    const { capacity,mergeable,current_status } = req.body;
    let newTable=new Table({
      capacity:capacity,mergeable:mergeable,current_status:current_status
    })
    newTable.save().then(found => {
   res.json({error:false,data:"Successfully"})
    }).catch(err => {
      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
    })
  
  }