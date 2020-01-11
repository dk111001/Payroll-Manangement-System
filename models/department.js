const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    dname:{
        type : String,
        required : true
    },
    dno :{
        type: Number,
        required : true
    }

});

const department = mongoose.model('department',departmentSchema);
module.exports = department;