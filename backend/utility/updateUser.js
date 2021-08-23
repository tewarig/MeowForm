const User = require("../Modles/user");

const updateUser = async (id,formName,formTitle,FormData ,formData) =>{
    formData = JSON.parse(formData);
    let date = new Date();
    formData["_date"] = date;

    let newUserData = await User.findById(id);
    if(newUserData["forms"].length === 0){
        const newForm = {};
        newForm["formName"] = formName ;
        newForm["formData"] = [];
        newForm["formData"].push(formData);
        newForm["redirectUrl"] = "";
        newUserData["forms"].push(newForm);
        let final = await newUserData.save();
        
    }else{
        let index = -1;
        for(let i=0;i<newUserData["forms"].length;i++){
            if(newUserData.forms[i].formName === formName){
             index = i;
             break;
            }
        }
        if(index != -1){
            let array = newUserData.forms[index].formData;
            array.push(formData);
            newUserData.forms[index].formData = array ;
            console.log(newUserData.forms[index].formData);
            let final = await newUserData.save();

        }else{
            const newForm = {};
            newForm["formName"] = formName ;
            newForm["formData"] = [];
            newForm["formData"].push(formData);
            newForm["redirectUrl"] = "";
            newUserData["forms"].push(newForm);
            let final = await newUserData.save()
           
        }
    }   

  
}
module.exports = updateUser;