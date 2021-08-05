const express = require("express");
const router = express.Router();



router.post("/:email&:formName",async(req,res)=>{
   let email = req.params.email ;
   let formName = req.params.formName;
   let data = req.body;

       try{
           console.log(`email: ${email} `);
           console.log(`formName: ${formName}`);
          console.log(data);
          res.status(200).send("done") ;
      }
      catch(error){
          res.status(400).send(error);
        //   console.log(error);
      }
});
module.exports = router;