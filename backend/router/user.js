const express = require("express");
const router = express.Router();
const Search = require("../utility/searchUser");
const createUser = require("../utility/createUser");

router.get("/:mail",async(req,res)=>{

    let email = req.params.mail;
    let result ;
         result = await Search(email);
       
      if(typeof result !== 'undefined' && result.length === 0){
           let user = await createUser(email);
           res.json(user);
           
      }else{

          res.json(result);
      } 



});

module.exports = router;