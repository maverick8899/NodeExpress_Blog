const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Music = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Music', Music);
