const User = require("../Modles/user");

const log = async(email) => {
  
     const newUser = new User({
         email,
     })
     try{
         const a1 = await newUser.save();
         console.log('user created') 
     }catch(error){
         console.log(error);
     }
}
module.exports = log;