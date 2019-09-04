const { mongoose, peopleSchema, nameCollection } = require('../schema/people-schema');
const peopleModel = mongoose.model(nameCollection, peopleSchema, nameCollection);

module.exports = {
    peopleModel,
    ObjectId: mongoose.Types.ObjectId,
}