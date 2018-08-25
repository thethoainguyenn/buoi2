var db = require('../DBConnection');

var product = {
    getAllProduct: function (callback) {
        return db.query("SELECT * from sanpham", callback);
    },

}
module.exports = product;
