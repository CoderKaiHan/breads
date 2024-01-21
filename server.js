const express = require('express');

require('dotenv').config();

const app = express();

app.get('/',(req,res)=>{
    res.send('This is a cool application about breads!')
});

app.use('/breads', require('./controllers/breads_controller'));

app.listen(process.env.PORT);