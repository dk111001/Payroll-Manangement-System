const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    eid :{
        type: Number,
        required : true,
        unique : true
    },
    gender :{
        type: String,
        required : true
    },
    dob :{
        type:String,
        required : true
    },
    doj :{
        type: String,
        required : true
    },
    phone :{
        type: Number,
        required : true
    },
    address :{
        type: String,
        required : true
    },
    dno :{
        type: Number,
        required : true
    },
    designation :{
        type : String,
        required : true
    },
    sid:{
        type:Number,
        required : true,
        unique : true
    },
    did:{
        type: Number,
        required : true,
        unique : true
    }

});

const employee = mongoose.model('employee',employeeSchema);
module.exports = employee;