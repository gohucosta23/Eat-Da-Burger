const mysql = require("mysql");

const connection = mysql.createConnection({

    host : "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port : 3306,
    user : "g3nq3ehegduwuqrg",
    password : "hm5rycl10go0jjs0",
    database : "rwegete2t93vrxmi"
});

connection.connect(function(err){
    if(err) {
        console.error("Error connecting :", err.stack);
        return;
    }
    console.log("Connected as id : ", connection.threadId);
});

module.exports = connection;
