const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    city: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    interestedUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
