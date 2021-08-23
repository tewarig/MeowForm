const express = require("express");
const router = express.Router();
const User = require("../Modles/user");
const updateUrl = require("../utility/updateUrl");



router.post("/:mail&:authKey",async(req,res)=>{

    let authKey = req.params.authKey;
    if(authKey === process.env.authKey){  

        
        let url =  req.body.url;
        let formName = req.body.formName;
         
       
        let email = req.params.mail;
             updateUrl(email,url, formName);
          
                 res.send("yo");


    }else{
        res.status(401).send("Auth Key does not match");
    }



});

module.exports = router;