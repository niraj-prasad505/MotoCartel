const mongoose = require("mongoose");

// Brand Preference Schema
const brandPreferenceSchema = new mongoose.Schema(
    {
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
            required: true,
        },
        score: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    { _id: false }
);

// String Preference Schema
const stringPreferenceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        score: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    { _id: false }
);

const UserPreferenceSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
            index: true,
        },

        preferences: {
            brands: {
                type: [brandPreferenceSchema],
                default: [],
            },

            categories: {
                type: [stringPreferenceSchema],
                default: [],
            },

            productCollection: {
                type: [stringPreferenceSchema],
                default: [],
            },

            vehicleTypes: {
                type: [stringPreferenceSchema],
                default: [],
            },
        },

        recentlyViewed: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        lastActivity: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("UserPreference", UserPreferenceSchema);