const express = require("express");

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.static("public"));
app.use(express.urlencoded( { extended : true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs( { defaultLayout : "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(err){

    if(err) throw err;

    console.log("Server listening on: http://localhost:" + PORT);
})