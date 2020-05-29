    const express = require("express");
    const router = express.Router();
    const reservations = [];
    const waitList = [];

    router.get("/reservations", function (req, res) {
        return res.json(reservations);
    });
    
    router.get("/waiting-list", function (req, res) {
        return res.json(waitList);
    });  
    
    router.post("/reservations", function (req, res) {
        const newReservation = req.body;
        if (reservations.length < 5) {
            reservations.push(newReservation);
        } else {
            waitList.push(newReservation);
        }
        res.json(newReservation);
    });
    
    router.post("/clear",function(req,res){
        reservations.length = 0;
        waitList.length = 0;
    });
    
    module.exports = router;
