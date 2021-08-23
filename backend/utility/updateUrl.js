const User = require("../Modles/user");


const updateUrl = async(email,url,formName) => {
             let index = 0;
               let result = await User.find({email});
               let temp = result[0]._id;
               result = await User.findById(temp);

               
                 for(let i=0;i<result.forms.length;i++){
                     console.log(result.forms[i].formName);
                       if(result.forms[i].formName == formName){
                           console.log("i was run");
                           result.forms[i].redirectUrl = url ;
                           index = i;
                           break;
                       }
                       
                 }
                 console.log(result);
                     let meow = await result.save();
   
}
module.exports = updateUrl;