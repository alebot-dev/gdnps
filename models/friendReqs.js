const { Schema, model } = require("mongoose");

const friendReq = Schema({
    fromID: {type: Number},
    toID: {type: Number},
    message: {type: String},
    sentDate: {type: Date, default: Date()},
    ID: {type: Number, unique: true},
    new: {type: Boolean, default: true}
});

module.exports = model("FriendReq", friendReq);