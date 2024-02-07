// dependencies
const express = require('express');
const baker = express.Router();
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed.js');

//Seed Data
baker.get('/data/seed', async (req, res) => {
    try {
        // Check if the data already exists in the database
        const existingBakers = await Baker.find();
        if (existingBakers.length === 0) {
            // If no existing data, insert the seed data
            await Baker.insertMany(bakerSeedData);
            console.log('Seed data inserted successfully.');
        } else {
            console.log('Seed data already exists in the database.');
        }
        // Redirect to the desired page
        res.redirect('/breads');
    } catch (error) {
        console.error('Error seeding data:', error);
        res.status(500).send('Error seeding data');
    }
});

// baker.get('/data/seed', (req, res) => {
//     Baker.insertMany(bakerSeedData)
//         .then(res.redirect('/breads'))
// });

//Index
baker.get('/', (req, res) => {
    Baker.find()
      .populate('breads')
      .then(foundBakers => {
        res.send(foundBakers);
      })
});

//Show
baker.get('/:id',(req,res) =>{
    Baker.findById(req.params.id)
      .populate('breads')
      .then(foundBaker => {
        res.render('bakerShow', {
            baker:foundBaker
        });
      })
      .catch(err => {
        res.send('404');
      });
});

//Delete
baker.delete('/:id', (req, res) => {
  Baker.findByIdAndDelete(req.params.id)
  .then(deletedBaker => {
    res.status(303).redirect('/breads')
  })
  .catch(err => {
    res.send('error404');
  })
});

// export
module.exports = baker;                    
