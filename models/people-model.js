const { mongoose, peopleSchema } = require('../schema/people-schema');
const peopleModel = mongoose.model('people', peopleSchema, 'people');

module.exports = {
    peopleModel,
    ObjectId: mongoose.Types.ObjectId,
}