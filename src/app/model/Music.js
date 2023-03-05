const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Music = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true }, //unique nếu trùng slug thì nó thêm mã cuối
        ID: { type: String },
    },
    { timestamps: true }, //auto add createdAt, updatedAt
);
//khai báo model với instance of Schema
module.exports = mongoose.model('Music', Music);
