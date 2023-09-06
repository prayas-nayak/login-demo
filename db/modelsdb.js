const mongoose = require('mongoose');

const newSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:String,
    id:String,
    password:String,
})

//compiling
const dbmodel=mongoose.model("userData",newSchema);


//creating document
const documentSave = async (userName,userEmail,userAge,userId,userPwd)=>{
    try {
        
        const newDocument = new dbmodel ({
            name:userName,
            email:userEmail,
            age:userAge,
            id:userId,
            password:userPwd,
        })

        await newDocument.save();
        console.log("data saved !!");

    } catch (error) {

        console.log("unable to insert !!!");

    }
}

module.exports={documentSave,dbmodel};