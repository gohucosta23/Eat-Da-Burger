const orm = require("../config/orm.js");

const burger = {

    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(burgerId, cb){
        orm.updateOne("burgers", "devoured", true, "id", burgerId, function(res){
            cb(res);
        });
    },
    deleteBurger: function(burgerId, cb){
        orm.deleteBurger("burgers", "id", burgerId, function(res){
            cb(res);
        });
    }
}

module.exports = burger;