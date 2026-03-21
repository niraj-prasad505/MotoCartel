const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/motocartel");

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [],
    isadmin: Boolean,
    order:[],
    contect: Number,
    Picture: String
})

module.exports = mongoose.model("user",userSchema);
