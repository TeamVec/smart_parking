const express = require("express")
const mysqlConnnection = require("../connection")
const router = express.Router();

router.get("/",function(req, res){
    mysqlConnnection.query("SELECT ? FROM hotel WHERE HOTEL_ID=?",["HOTEL_NAME",1],function(err,rows,field){
        if(err){
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
    
        
    })

module.exports =router;