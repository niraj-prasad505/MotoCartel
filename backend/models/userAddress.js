const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    altPhone: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model("UserAddress", userAddressSchema);