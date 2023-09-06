const mongoose = require('mongoose');


const connectFunction= async (url,obj)=>{
    try {

        await mongoose.connect(url,obj);
        console.log("connected to database  !!");

    } catch (error) {

        console.log("error to connect");

    }
}

module.exports=connectFunction;