const mongoose = require('mongoose');

const upasswordSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required :true,
        unique : true
    },
    password:{
        type:String,
        required : true
    },
    eid :{
        type: Number,
        required : true,
        unique : true
    }

});

const upassword = mongoose.model('upassword',upasswordSchema);
module.exports = upassword;