const mongoose = require('mongoose');

const deductSchema = new mongoose.Schema({
    did:{
        type : Number,
        required : true,
        unique : true
    },
    tax :{
        type: Number,
        required : true
    },
    leave :{
        type: Number,
        required : true
    },
    pf :{
        type: Number,
        required : true
    },
    wf :{
        type: Number,
        required : true
    }
    ,
    loan :{
        type: Number,
        required : true
    },
    bus :{
        type: Number,
        required : true
    }

});

const deduction = mongoose.model('deduction',deductSchema);
module.exports = deduction;