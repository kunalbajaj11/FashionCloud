const mongoose = require("mongoose");

const CacheSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true,
        default: 'Created by default',
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    ttl: {
        type: Number,
        default: 900000         // 15 mins
    }
});

module.exports = Cache = mongoose.model('cache', CacheSchema);