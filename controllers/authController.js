const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function register(req,res) {
    const {username,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("insid");
    User.register(username,hashedPassword, (err)=>{
        if (err) {
            return res.status(500).json({message:"Error registering the user"});
        }
        res.status(201).json({message:"User registered successfully"});
    });
}

async function login(req,res) {
    const {username,password} = req.body;

    User.findByUsername(username,async (err,user)=>{
        if(err){
            return res.status(500).json({message:"Error logging in"})
        }

        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(401).json({message:"Invalid user"});
        }
        const token = jwt.sign({id:user.id,username:user.username},'secret_key', {
            expiresIn: '1h'
        });

        res.json({message:"Login success", token})
    })
}

module.exports = { register, login };