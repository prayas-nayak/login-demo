const express=require("express");
const app=express();

//router
const router = require('./router/web.js');
app.use("/",router);

//static
app.use(express.static('public'));

//db
const connectFunction = require('./db/connectiondb.js');

const url="mongodb+srv://prayasnayak78:mongoPrayas@loginsigndemo.hb3sumr.mongodb.net/?retryWrites=true&w=majority";

const obj={dbName:"logsign"};
connectFunction(url,obj);


const {documentSave,dbmodel} = require('./db/modelsdb.js');

app.post("/signinForm", express.urlencoded({ extended: true }),async (req,res)=>{
    try {
        const formData = {
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            id:req.body.userid,
            password:req.body.password
        }
        const dbdata= await dbmodel.find({id: formData.id});

        if (dbdata.length===0) {
            documentSave(formData.name,formData.email,formData.age,formData.id,formData.password);
        } else {
            res.render("idExists.ejs")
        }
    
        res.render("returnToHome.ejs");

    } catch (error) {
        res.status(500).send('Error submitting form');
    }
})



app.post("/loginInToHome", express.urlencoded({ extended: true }),async (req,res)=>{
    try {
        const logData={
            logid:req.body.userid,
            logpwd:req.body.password
        }
        const dbdata= await dbmodel.find();

//...........................sending data .............................
        const userData = await dbmodel.findOne({ id: logData.logid });
        module.exports=userData;
//......................................................................
        const idArray = [];
        for (let document of dbdata){
            idArray.push(document.id);
        }

        const pwdArray = [];
        for (let document of dbdata){
            pwdArray.push(document.password);
        }

        if (idArray.includes(logData.logid) && pwdArray.includes(logData.logpwd)){

            res.render("home.ejs",{userData});

        }else{
            res.send("wrong id or password")
        }

    } catch (error) {
        res.status(500).send('Error in login in');
    }
})



app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})