const studentModel = require("../models/studentModel");

// get
const getStd = async(req, res) => {
    const getData = await studentModel.find();
    if(getData) {
        res.send(getData)
    }
}

// get single data
const getOneStd = async(req, res) => {
    const getData = await studentModel.find(
        {_id: req.params.id}
    )
    if(getData) {
        res.send(getData)
    }
}


// post 
const createStd = async(req, res) => {
    const newData = await studentModel(req.body);
    const saveData = newData.save();
    if(saveData) {
        res.send(newData)
    }
}

// put
const updateStd = async(req, res) => {
    const updateData = await studentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData) {
        res.send("Update Successfully")
    }
}


// delete

const deleteStd = async(req, res) => {
    const deleteData = await studentModel.deleteOne(
        {_id: req.params.id}
    )
    if(deleteData) {
        res.send("Deleted Successfully")
    }
}

module.exports = {getStd, getOneStd, createStd, updateStd, deleteStd};