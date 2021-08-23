const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
   formName: {
       type: String,
       required: true,
   } ,
   formData: {
       type: String,
       required: true,
   } ,
   redirectUrl:{
       type:String
   }

});
module.exports = mongoose.model("forms",formSchema);