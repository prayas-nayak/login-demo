const express = require('express');
const router=express.Router();

const {landerController,loginController,signinController} = require('../controller/controllers.js');

router.get("/",landerController);
router.get("/login",loginController);
router.get("/signin",signinController);
// router.get("/home",homeController);


module.exports=router;