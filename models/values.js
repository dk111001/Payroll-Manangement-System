const mongoose = require('mongoose');

const valuesSchema = new mongoose.Schema({
    eid:{
        type : Number,
        required : true
    },
    sid:{
        type : Number,
        required : true
    },
    did:{
        type:Number,
        required :true
    },
    tid:{
        type : Number,
        required : true
    }    

});

const values = mongoose.model('values',valuesSchema);
module.exports = values;