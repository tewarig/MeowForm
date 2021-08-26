const express = require("express");
const router = express.Router();
var axios = require("axios").default;
const searchUser = require("../utility/searchUser");
const updateUser = require("../utility/updateUser");
const mailgun = require("mailgun-js");
const DOMAIN = process.env.Domain ;
const api_key = process.env.API_MONEY;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});

const app = express(); 

app.set('view engine','ejs');
app.set('views',  './views'); 


router.post("/:email&:formName",async(req,res)=>{

    
 

   let email = req.params.email ;
   let userData = await searchUser(email) ;
   if(userData == ""){
     res.send("You must signUp with that email to use MeowFroms");
     return;
   }  

  // console.log(userData[0].forms.length);
   let formName = req.params.formName;
   let temp = req.body;

   let formData = JSON.stringify(temp);
   temp =  JSON.stringify(temp);  
   temp = temp.replace(/{/g," ");
   temp = temp.replace(/}/g," ");
   temp = temp.split(",");
   let title = [];
   let entry = [];
   for(let i=0;i<temp.length;i++){
       temp[i] = temp[i].replace(/"/g,"");
       let mainArray = temp[i].split(":");
        title.push(mainArray[0]);
        entry.push(mainArray[1]);

   }
   //    temp = temp.split(":");
   let mailBody = "";
   for(let i=0;i<temp.length;i++){
       mailBody += `<b>${title[i]}</b> : <p>${entry[i]} <p>  <br/>`
   }
    //  console.log(mailBody);
   let data = JSON.stringify(req.body);
   

     let meow = await updateUser(userData[0]._id,formName, title,entry,formData);
    res.sendFile("./views/submited.html" ,{root :__dirname });

  //  mg.messages().send( {  
  //   from: 'Cheese 🐱<cheese@meowform.xyz>',
  //   to: email,
  //   subject: `You have got a new Response in ${formName} Meow!  UvU `,
  //   html: `${mailBody}     <br/> <a href="https://www.buymeacoffee.com/tewarig"> buy Cheese some cat food 🐟 </a>`
  // } , function (error, body) {
      
  //   if(error){
  //     console.log(error);
  //   }else{
  //     console.log(body);
  //   }
  //   });
    

 

});
module.exports = router;