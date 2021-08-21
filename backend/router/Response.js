const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
var axios = require("axios").default;




router.post("/:email&:formName",async(req,res)=>{

    
 

   let email = req.params.email ;
   let formName = req.params.formName;
   let temp = req.body;
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
    console.log(req);
   let data = JSON.stringify(req.body);

       try{
           console.log(`email: ${email} `);
           console.log(`formName: ${formName}`);
          let testAccount = await nodemailer.createTestAccount();
          let transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "hai@meowform.xyz", // generated ethereal user
              pass: "", // generated ethereal password
            },
          });
          let info = await transporter.sendMail({
            from: '"Meow Forms 🐱 " <hai@meowform.xyz>', // sender address
            to: `${email}`, // list of receivers
            subject: `New response in ${formName}`, // Subject line
            text: `${mailBody}`, // plain text body
            html: `${mailBody}`, // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

          res.status(200).send("donee") ;
      }
      catch(error){
          res.status(400).send(error);
        //   console.log(error);
      }
});
module.exports = router;