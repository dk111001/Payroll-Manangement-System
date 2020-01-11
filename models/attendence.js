const mongoose = require('mongoose');

const atdSchema = new mongoose.Schema({
    eid:{
        type : Number,
        required : true
    },
    month:{
        type : String,
        required : true
    },
    leaves:{
        type:Number,
        required :true
    }    

});

const atd = mongoose.model('atd',atdSchema);
module.exports = atd;