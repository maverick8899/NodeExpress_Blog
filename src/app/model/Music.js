const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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
//Add Plugins
mongoose.plugin(slug);
//thiết lập ngày xóa và ghi đè method mà mongoose-delete có lên mongoose ex:find-xuất record vs delete:false
Music.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

//khai báo model với instance of Schema
module.exports = mongoose.model('Music', Music);
