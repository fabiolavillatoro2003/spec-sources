const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//WRITE THE SCHEMA HERE

const sourceSchema = new Schema({
    sourceId: {type: Number, required: true},
    sourceName: {type: String, required: true},
    sourceEmail: {type: String, required: true},
})
//A SCHEMA defines one single thing

//A MODEL is like a constructor
const sources = mongoose.model('spec_sources', sourceSchema);

module.exports = sources;

