const express = require("express");
const router = express.Router();
const addFrom = require("../utility/addForm");


router.post("/:authKey",async(req,res)=>{
    let authKey = req.params.authKey;
    if(authKey === process.env.authKey){  
        let email = req.body.email;
        let formName = req.body.formName;
        let url = req.body.url;
       addFrom(email,formName ,url);
    }else{
        res.send("AuthKey does not match");
    }
    
});

module.exports = router;