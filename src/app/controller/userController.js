const User = require('../model/User_ReactBase');
const axios = require('axios');

const PAGE_LIMIT = 10;
const handleAddUserToDB = (data) => {
    data.forEach((res) => {
        const user = new User({
            password: res.password,
            role: res.role,
            userImage: res.userImage,
            username: res.username,
            email: res.email,
            id: res.id,
            //lưu ý trường id của MongoDB là Object nên việc _id=res.id=> fail
        });
        user.save(); //insert into DB
    });
};
class UserController {
    //GET Add to MongoDB
    index(req, res, next) {
        axios.get('https://63f02165271439b7fe7ad2e9.mockapi.io/api/user/users').then((response) => {
            handleAddUserToDB(response.data);
            res.send('Saved');
        });
    }
    //GET
    paginate(req, res, next) {
        let page = req.query.page;
        let pageLimit = req.query.per_page;
        if (page) {
            //page <=0 sẽ lọt vào catch nên validate cho nó bằng 1, mặc định render page1
            page <= 0 && (page = 1);
            const amountPageSkip = (parseInt(page) - 1) * PAGE_LIMIT;
            User.find({})
                .skip(amountPageSkip)
                .limit(pageLimit || PAGE_LIMIT)
                .then((user) => res.json(user))
                .catch((err) => res.status(500).json(err));
        } else {
            User.find({})
                .then((user) => res.json(user))
                .catch((err) => res.status(500).json(err));
        }
    }
}
module.exports = new UserController();
