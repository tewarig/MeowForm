const User = require("../Modles/user");




let addForm = async(email,formName,url) => {
    
    let index = 0;
    let result = await User.find({email});
    let temp = result[0]._id;
    result = await User.findById(temp);
    let newForm = {};
    newForm["formData"]  = [];
    console.log(url);
    newForm["redirectUrl"] = url;
    newForm["formName"] = formName;
    result.forms.push(newForm);
    let finalForm = result.save();
    console.log(result);
}



module.exports = addForm;