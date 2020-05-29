    const path = require("path");
    const express = require("express");
    const router = express.Router();
    
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });
    
    router.get("/make", function (req, res) {
        res.sendFile(path.join(__dirname, "../make.html"));
    });
    
    router.get("/view", function (req, res) {
        res.sendFile(path.join(__dirname, "../view.html"));
    });
    
module.exports=router;