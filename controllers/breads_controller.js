const express = require('express');

const breads = express.Router();
const Bread = require('../models/bread');

//INDEX
breads.get('/',(req,res)=>{
    res.render('index',{
        breads:Bread,
        title:'Index Page'
    });
    // res.send(Bread)
});

//Show
breads.get('/:arrayIndex',(req,res)=>{
    if (Bread[req.params.arrayIndex]){
        res.render('Show',{
            bread:Bread[req.params.arrayIndex]
        })
    }else{
        res.send('404');
    }
    // res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads; 