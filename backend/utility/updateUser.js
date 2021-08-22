const User = require("../Modles/user");

const updateUser = async (id,formName,formTitle,FormData) =>{
    console.log("id"+id+"\n formName:"+formName + "\n formTitle:"+formTitle + "\n FormData:"+ FormData); 
    let newUserData = await User.findById(id);
    if(newUserData.forms.length === 0){

       let date = new Date();
    
        let newForm = {
            formName,
            formTitle,
            FormData,
            date
        }
        let array = [];
         array.push(newForm);
           newUserData.forms = array;
        let finalData = await newUserData.save();
        
    }else{
        let len = newUserData.forms.length;
        let index = -1;
        for(let i=0;i<len;i++){
              if(newUserData.forms[i].formName == formName){
                  index = i;
                  break;
              }
        }
        if(index  != -1){
            let array = newUserData.forms[index].FormData ;
            array.push(FormData);
            console.log(array);
            newUserData.forms[index].formData = array;
            newUserData.forms[index].formTitle = formTitle;
            let finalData = await newUserData.save();
        }
    }
  
}
module.exports = updateUser;