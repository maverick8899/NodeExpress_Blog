//
const Handlebars = require('handlebars');
module.exports = {
    //
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        /*
        khi click sortIcon-link,SortMw run before nhận mode desc ban đầu và sort desc
        -after run các MW next, finally đến MW cuối res.render & run this func in views & toggle mode
        -field là tên record (DB) được truyền từ views,sort là object của res.local._sort.(SortMw)
         +fields define since mount through this func
         +sort change giá trị khi click lần first vào sortIcon-link*/

        console.log(field, sort.column);
        const icons = {
            default: '<i class="fa-sharp fa-solid fa-sort"></i>',
            desc: '<i class="ps-1 fa-solid fa-arrow-down-wide-short"></i>',
            asc: '<i class="fa-solid fa-arrow-up-short-wide"></i>',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };
        //field là column trước sort.column là column đã thay đổi(SortMw) sau khi click
        const sortType = field === sort.column ? sort.type : 'default';
        const icon = icons[sortType];
        const type = types[sortType];

        //mã hóa các ký tự đặc biệt trong dữ liệu,để tránh các lỗ hổng bảo mật như XSS
        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

        const output = `<a href="${href}" > ${icon} </a>`;
        return new Handlebars.SafeString(output);
    },
};
