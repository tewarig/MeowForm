const express = require("express");
const router = express.Router();



router.post("/:email",async(req,res)=>{
   let email = req.params.email ;
//    let fromName = req.params.e;

       try{
           console.log(`email${email} + fromName${fromName}`);
          console.log(req.body);
          res.status(200).send("done") ;
      }
      catch(error){
          console.log(error);
      }
});
module.exports = router;