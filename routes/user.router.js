const express=require('express');
const passport=require('passport');
const userModel=require('../models/user.model');
const router = express.Router();

const FacebookStrategy = require('passport-facebook').Strategy;

router.get('/', async function(req,res){
    const rows = await userModel.findAll();
    res.json(rows);
})

router.use('/auth/facebook', require('./social/facebook'));

router.get('/', async function(req,res){
    const rows = await userModel.findAll();
    res.json(rows);
});
router.get('/login', async function(req,res){
    res.json({
        message:"fail"
    })
})
module.exports = router;