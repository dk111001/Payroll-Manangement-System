const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    sid:{
        type : Number,
        required : true,
        unique : true
    },
    base :{
        type: Number,
        required : true
    },
    hra :{
        type: Number,
        required : true
    },
    da :{
        type: Number,
        required : true
    },
    ma :{
        type: Number,
        required : true
    }


});

const salary = mongoose.model('salary',salarySchema);
module.exports = salary;