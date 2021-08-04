const mongoose = require('mongoose');
async function connectDb(){
  try{
    await mongoose.connect(process.env.dbUrl,{
            useCreateIndex: true,
			useFindAndModify: false,
			useNewUrlParser: true,
			useUnifiedTopology: true,
    })
    console.log('connected to database');
  }
  catch(error){
   console.log(error);
  }
}
module.exports = connectDb;