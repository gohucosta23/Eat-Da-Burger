const connection = require("./connection.js");



const orm = {

    selectAll: function (table, cb) {

        connection.query(`SELECT * FROM ${table};`, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, burgerName, cb) {

        connection.query(`INSERT INTO ${table} (burger_name) VALUES ("${burgerName}")`, function (err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);

        });
    },
    updateOne: function (table, burgerId, cb) {

        connection.query(`UPDATE ${table} SET devoured = true WHERE id = ${burgerId}`, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
}
module.exports = orm;