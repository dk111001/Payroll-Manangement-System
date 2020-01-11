const mongoose = require('mongoose');

const tSchema = new mongoose.Schema({
    tid:{
        type : Number,
        required : true,
        unique : true
    },
    eid:{
        type : Number,
        required : true
    },
    amount:{
        type:Number,
        required : true
    },
    month:{
        type : String,
        required : true
    } 

});

const transactions = mongoose.model('transactions',tSchema);
module.exports = transactions;