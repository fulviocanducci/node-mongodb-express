const { mongoose, Schema, SchemaTypes } = require('../connection/index');

const peopleSchema = new Schema({
    id: { 
        type: SchemaTypes.ObjectId 
    },
    name: {
        type: SchemaTypes.String
    },
    dataCreated: {
        type: SchemaTypes.Date
    },
    salary: {
        type: SchemaTypes.Decimal128
    } 
  },{ 
      versionKey: false 
});

peopleSchema.set('toJSON', {
    getters: true,
    transform: (doc, ret) => {
        if (ret.salary) { 
          ret.salary = parseFloat(ret.salary.toString()); 
        }
        return ret;
    },
});

module.exports = { 
    mongoose,    
    peopleSchema    
}