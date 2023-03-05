const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const User = new Schema(
    {
        password: String,
        role: String,
        userImage: String,
        username: String,
        email: String,
        id: String,
    },
    { timestamps: true }, //auto add createdAt, updatedAt
);
//khai báo model với instance of Schema
module.exports = mongoose.model('User', User);
