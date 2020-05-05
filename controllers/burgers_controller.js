const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
       
        const burgerObj = {
            burgers : data
        }
        
        res.render("index", burgerObj);

    });
});
router.post("/api/burgers", function(req, res){

    const burgerName = req.body.burger
   
    burger.insertOne(burgerName, function(result){
       
        res.json( {id : result.insertId} );
    });
});

router.put("/api/burgers/:id", function(req, res){

    const burgerId = req.params.id;
    
    burger.updateOne(burgerId, function(result){

        if(result.changedRows === 0){

            return res.status(404).end();
        }
        else {
            res.json( {id : result.insertId} );
            res.status(200).end();
        }
        
    });
});

router.delete("/api/burgers/:id", function(req, res){
    
    const burgerId = req.params.id;
    
    burger.deleteBurger(burgerId, function(result){

        if(res.affectedRows === 0){

            res.status(404).end();
        }
        else {
            
            res.status(200).end();
        }
    });
});

module.exports = router;