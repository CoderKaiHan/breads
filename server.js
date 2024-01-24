const express = require('express');

require('dotenv').config();

const app = express();

//MIDDLEWARE
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('This is a cool application about breads!');
});

app.set('views',__dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/breads', require('./controllers/breads_controller'));

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  });

app.listen(process.env.PORT);