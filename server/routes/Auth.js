

const { checkAlreadyRegistered, } = require("../controllers/authControllers.js");


// const router  = express.Router()
const express = require('express');
const passport = require('passport')
const router = express.Router();

// importing User Schema 
const User = require('../models/User.js')
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { createSecretToken } = require("../middleware/secretToken.js");
const {userVerification} = require("../middleware/authMiddleware.js")

router.post('/', userVerification)


router.post("/register", checkAlreadyRegistered, async  (req, res) => {
  try{
  const { email,  username, password, register_date } = req.body;
  const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
 const user = User.register(new User({ email: email, username: username, register_date }), password, function (err, user) {
    if (err) {
      res.json({ success: false, message: "Your account could not be saved. Error: " + err });
    }
    else {
      req.login(user, (err) => {
        if (err) {
          res.json({ success: false, message: err });
        }
        else {
          res.json({ success: true, message: "Your account has been saved" });
        }
      });
    }
  });
  const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }

});

router.post("/login", async (req, res)  => {
  try{
  const {username, password } = req.body;
  
  if(!username || !password ){
    return res.json({message:'All fields are required'})
  }
  const user = await User.findOne({ username });
  if(!user){
    return res.json({message:'Incorrect password or username' }) 
  }
  
   const auth =  passport.authenticate("local", function (err, user, info) {
      
    })(req, res);
    if (!auth) {
      res.json({ success: false, message: "username or password incorrect" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
    next() 
} catch (error) {
  console.error(error);
}
});


router.post("/logout", function (req, res) {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logged out' });
  } else {
    res.send({ msg: 'no user to log out' })
  };
});


module.exports = router;