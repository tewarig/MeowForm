if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cros = require("cors");
const connectDb = require('./connectDb');
const log = require("./utility/createUser");
const Search = require("./utility/searchUser");



const app = express();
const port = process.env.PORT||4000;
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// log("gauravtewari111@gmail.com")



const responseRoute = require("./router/Response");

app.use("/res",cros(),responseRoute);

const userRoute = require("./router/user");
app.use("/user",cros(),userRoute);

app.listen(port,()=>(console.log(`server have started on port ${port}`)))