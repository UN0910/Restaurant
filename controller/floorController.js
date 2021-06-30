const Floor = require("../model/floorModel");

exports.createFloor=(req,res)=>{
    const { floor_name,tables } = req.body;
    let newFloor=new Floor({
      floor_name:floor_name,tables:tables
    })
    newFloor.save().then(found => {
   res.json({error:false,data:"Successfully"})
    }).catch(err => {
      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
    })
  
  }
exports.editFloor=(req,res)=>{
    const { floor_name } = req.body;
    console.log(floor_name)
    Floor.findByIdAndUpdate(req.params.id,{
      floor_name:floor_name
    }).then(found => {
   res.json({error:false,data:"Updated"})
    }).catch(err => {
      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
    })
  
  }
exports.getFloorById=(req,res)=>{
  Floor.findById(req.params.id).then(found=>{
    res.json({error:false,data:found})
    }).catch(err => {
      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
    })
}
exports.addTableToFloor=(req,res)=>{
const {floorId}=req.params
const {tableId}=req.body
//var id = mongoose.Types.ObjectId(tableId);


  Floor.findByIdAndUpdate(floorId,{$push: { tables:tableId }}).then(found => {

    res.status(201).json({ error: false, data: "Updated"})

  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })
}
exports.RemoveTableFromFloor=(req,res)=>{
  const {floorId}=req.params
  const {tableId}=req.body
    Floor.findByIdAndUpdate(floorId,{$pull: { tables:tableId }}).then(found => {
  
      res.status(201).json({ error: false, data: "Updated"})
  
    }).catch(err => {
      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
    })
  }
exports.getAllFloor=(req,res)=>{
  Floor.find({}).populate('tables').then(found=>{
    res.json({ error: false, data: found })
  }).catch(err => {
    res.status(503).json({ error: true, data: 'Something went wrong with db', errMsg: err })
  })
}