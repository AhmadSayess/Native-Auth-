const Model = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = (req , res ) => {
 res.send("loginuser its own account")
}


const singupUser = async (req , res ) => {
    
   }





module.exports= {
    loginUser, singupUser
}