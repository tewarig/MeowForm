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
   forms:{
       type: Array,
       
   }
});

module.exports = mongoose.model('User',UserSchemea);
