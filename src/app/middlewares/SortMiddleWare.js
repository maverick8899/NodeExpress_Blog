module.exports = function SortMiddleWare(req, res, next) {
    res.locals._sort = {
        type: 'default',
    };
    //khi click vào icon sort href mới được truyền vào => executed below
    if (req.query.hasOwnProperty('_sort')) {
        //Obj.assign: Ghi đè lên các K-V đã có và thêm K-V chưa có
        Object.assign(res.locals._sort, {
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
};
