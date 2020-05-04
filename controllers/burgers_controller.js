const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){

        const burgerObj = {
            burger : data
        }
        console.log(burgerObj);
        res.render("index", burgerObj);

    });
});
router.post("/api/burgers", function(req, res){

    const burgerName = req.body.burger_name;

    burger.insertOne(["burger_name"],[burgerName], function(result){
       
        res.json( {id : result.insertId} );
    });
});

router.put("/api/burgers/:id", function(req, res){

    const burgerId = req.params.id;

    burger.updateOne(["id"], [burgerId], function(response){

        if(result.changedRows === 0){

            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});