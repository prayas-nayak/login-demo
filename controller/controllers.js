const landerController=(req,res)=>{
    res.render("lander.ejs")
}
const loginController=(req,res)=>{
    res.render("login.ejs")
}
const signinController=(req,res)=>{
    res.render("signin.ejs")
}
// const homeController=(req,res)=>{
//     res.render("home.ejs")
// }


module.exports={loginController,signinController,landerController}