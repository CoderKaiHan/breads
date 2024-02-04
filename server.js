// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);





//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));




app.get('/',(req,res)=>{
    res.send('This is a cool application about breads!');
});

app.set('views',__dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());

//breads
app.use('/breads', require('./controllers/breads_controller'));

//bakers
app.use('/bakers', require('./controllers/bakers_controller'));

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  });

app.listen(process.env.PORT);