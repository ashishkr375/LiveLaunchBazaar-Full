const mongoose = require("mongoose");

const uri ="mongodb+srv://admin_LiveLaunchBazaar:Ashish2003@livelaunchbazaar.arod5r7.mongodb.net/LiveLaunchBazaar?retryWrites=true&w=majority&appName=LiveLaunchBazaar";

mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser :true})
.then(()=>
    console.log("connection successful"))
.catch((err)=>{console.log
    (err);})
