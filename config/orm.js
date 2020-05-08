const connection = require("./connection.js");



const orm = {

    selectAll: function (table, cb) {

        connection.query(`SELECT * FROM ${table};`, function (err, result) {

            if (err) throw err;
            cb(result);

        });
    },
    insertOne: function (table, column, burgerName, cb) {

        connection.query(`INSERT INTO ${table} (${column}) VALUES ("${burgerName}")`, function (err, result) {

            if (err) throw err;
            cb(result);

        });
    },
    updateOne: function (table, columnOne, condition, columnTwo, burgerId, cb) {

        connection.query(`UPDATE ${table} SET ${columnOne} = ${condition} WHERE ${columnTwo} = ${burgerId}`, function (err, result) {

            if (err) throw err;
            cb(result);

        });
    },
    deleteBurger: function(table, column, burgerId, cb){

        connection.query(`DELETE FROM ${table} WHERE ${column} = ${burgerId};`, function(err, response){

            if(err) throw err;
            cb(response);
        });
    }
}
module.exports = orm;