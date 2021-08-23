const express = require("express");
const router = express.Router();
const Search = require("../utility/searchUser");
const createUser = require("../utility/createUser");

router.get("/:mail&:authKey",async(req,res)=>{
    let authKey = req.params.authKey;
    if(authKey === process.env.authKey){        
            let email = req.params.mail;
        
            let result ;
                 result = await Search(email);
               
              if(typeof result !== 'undefined' && result.length === 0){
                   let user = await createUser(email);
                   res.json(user);
                   
              }else{
        
                  res.json(result);
              } 
    }else{
        res.status(401).send("Auth Key does not match");
    }



});

module.exports = router;