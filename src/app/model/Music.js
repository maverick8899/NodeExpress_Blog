const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Music = new Schema(
    {
        _id: { type: Number },
        name: { type: String },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true }, //unique nếu trùng slug thì nó thêm mã cuối
        ID: { type: String },
    },
    {
        _id: false, //disabled _id default in mongoDB
        timestamps: true,
    }, //auto add createdAt, updatedAt
);
// Customer Query helpers( guide/query helpers)
Music.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({ [req.query.column]: isValidType ? req.query.type : 'desc' });
    }
    return this;
};

//Add Plugins
mongoose.plugin(slug);
//thiết lập ngày xóa và ghi đè method mà mongoose-delete có lên mongoose ex:find-xuất record vs delete:false
Music.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
//khởi tạo giá trị id tự tăng, bắt đầu từ 1; cứ thêm 1 giá trị i++
Music.plugin(AutoIncrement, { inc_field: '_id', start_seq: 1 });

//khai báo model với instance of Schema
module.exports = mongoose.model('Music', Music);
