const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : String,
    emial : String,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    isAdmin : Boolean,
    orders : {
        type : Array,
        defualt : []
    },
    contact : Number,
    picture : String,
});

module.exports = mongoose.model("user", userSchema);