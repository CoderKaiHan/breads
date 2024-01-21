const express = require('express');

const breads = express.Router();
const Bread = require('../models/bread');
//INDEX
breads.get('/',(req,res)=>{
    res.send(Bread)
});

//Individual bread
breads.get('/:arrayIndex',(req,res)=>{
    res.send(Bread[req.params.arrayIndex])
});

module.exports = breads 