// require mongoose
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

const breadSchema = new Schema({
  name:{type:String, required:true},
  hasGluten:Boolean,
  image:{type:String, default:'http://placehold.it/500x500.png'},
  ingredients:{type:String},
  baker:{
    type:String,
    enum:['Rachel','Monica','Chandler','Ross', 'Joey', 'Phoebe']
  }
});

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}

//static helper
breadSchema.static.getBreadsByBaker = function(bakerName){
  return this.find({baker:bakerName}).exec();
}

const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread;

// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//       ingredients:'Rye flour, water, salt, caraway seeds',
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//        ingredients:'Wheat flour, water, yeast, salt',
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//       ingredients:'Rice flour, almond flour, tapioca flour, water, yeast, salt, xanthan gum',
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//       ingredients:'Rye flour, water, sourdough starter, molasses, cocoa powder, salt',
//     }
//   ]
  