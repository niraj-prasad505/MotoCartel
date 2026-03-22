const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number
    },
    picture: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ["user", "owner"],
        default: "user"
    },
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
    
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);