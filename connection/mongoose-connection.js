const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db', {useNewUrlParser: true});

module.exports = { 
    mongoose, 
    Schema: mongoose.Schema, 
    SchemaTypes: mongoose.Schema.Types 
};