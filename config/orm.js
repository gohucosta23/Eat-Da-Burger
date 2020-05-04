const connection = require("./connection.js");



const orm = {

    selectAll: function (table, cb) {

        connection.query(`SELECT * FROM ${table}`, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, burgerName, cb) {

        connection.query(`INSERT INTO ${table}(burger_name) values (${burgerName})`, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, burgerId, cb) {

        connection.query(`UPDATE ${table} SET devoured = true WHERE id = ${burgerId}`, function(err, res){
            if(err) throw err;
            cb(res);
        });
    }
}
module.exports = orm;