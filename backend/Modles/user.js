const mongoose = require('mongoose');

const UserSchemea = new mongoose.Schema({
   email:{
       type: String,
       required :true,
       unique: true,

   },
   responseCount:{
       type: Number
   },
   forms:[ {
       formName : {
           type: String
       },
       formData : [
           
       ]          
       ,
       redirectUrl : {
           type : String,
       }
    }

   ]
});

module.exports = mongoose.model('User',UserSchemea);
