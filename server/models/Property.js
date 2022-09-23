const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
    NZ: {
        type: String,
        required: true
    },

    District: {
        type: String,
        required: true
    },

    Suburb: {
        type: String,
        required: true
    },

    Address: {
        type: String,
        required: true
    },

    Bedroom: {
        type: Number,
        required: true
    },

    Bathroom: {
        type: Number,
        required: true
    },

    Carpark: {
        type: Number,
        required: true
    },

    Price: {
        type: String,
        required: true
    },

    Term: {
        type: String,
        required: true
    },

    // Desc: {
    //     type: String,
    //     required: true
    // },

    Photos: {
        type: [String],
        required: true
    },

    // cheapestPrice: {
    //     type: Number,
    //     required: true,
    // },

    // Featured: {
    //     type: Boolean,
    //     required: true,
    // }
})

// export default mongoose.model("properties", propertiesSchema);
module.exports = properties = mongoose.model('properties', propertiesSchema);