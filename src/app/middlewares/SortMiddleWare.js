//
module.exports = function SortMiddleWare(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sort')) {
        //Obj.assign: Ghi đè lên các K-V đã có và thêm K-V chưa có
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
};
