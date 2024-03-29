//Dependencies
const mongoose = require('mongoose');
const {Schema} = mongoose;
const Bread = require('./bread');

//Schema
const bakerSchema = new Schema ({
    name:{
        type: String,
        required: true,
        enum:['Rachel','Monica','Chandler','Ross', 'Joey', 'Phoebe']
    },
    startDate:{
        type: Date,
        required: true
    },
    bio: String
}, { toJSON:{virtuals: true}});

//Virtual
bakerSchema.virtual('breads', {
    ref:'Bread',
    localField:'_id',
    foreignField:'baker'
});

//Hooks
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({baker:this._conditions._id})
    .then(deleteStatus => {
        console.log(deleteStatus)
    })
});

//Model and export
const Baker = mongoose.model('Baker', bakerSchema);
module.exports = Baker