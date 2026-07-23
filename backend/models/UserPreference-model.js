const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        score: {
            type: Number,
            default: 0,
            min: 0,
        }
    },
    { _id: false }
);

const UserPreferenceSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
        index: true,
    },

    preferences: {

        brands: {
            type: [scoreSchema],
            default: []
        },

        categories: {
            type: [scoreSchema],
            default: []
        },

        collections: {
            type: [scoreSchema],
            default: []
        },

        vehicleTypes: {
            type: [scoreSchema],
            default: []
        }

    },

    recentlyViewed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],

    lastActivity: {
        type: Date,
        default: Date.now
    }

},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model("UserPreference", UserPreferenceSchema);