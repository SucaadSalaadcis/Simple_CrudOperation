const mongoose = require("mongoose")

const studentModel = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    gender: {
     type: String,
     require: true
    }
},{timestamps: true});

module.exports = mongoose.model("student",studentModel);
