const User = require("../Modles/user");

const log = async(email) => {
  
     const newUser = new User({
         email,
     })
     try{
         const a1 = await newUser.save();
         return a1;
     }catch(error){
         console.log(error);
     }
}
module.exports = log;