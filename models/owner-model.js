const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname : {
        type : String,
        trim : true,
        minLength : 3,
    },
    emial : String,
    password : String,
    products : {
        type : Array,
        defualt : []
    },
    picture : String,
    gstin : String,
});

module.exports = mongoose.model("owner", ownerSchema);