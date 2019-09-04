const { peopleModel, ObjectId } = require('../models/people-model');

module.exports = {
    index: (request, response) => {
        peopleModel.find({}, (error, docs) => {
            if (error) {
                response.json(error);
            } else {
                response.json(docs);
            }
        });        
    },
    create: (request, response) => {        
        const { name, dataCreated, salary } = request.body;                
        peopleModel.create({name, dataCreated, salary}, (error, small) => {
            if (error) {
                response.json(error);
            } else {
                response.json(small);
            }
        });      
        
    },
    update: (request, response) => {
        const { name, dataCreated, salary } = request.body;        
        const _id = new ObjectId(request.params.id);        
        peopleModel.updateOne({_id: _id}, {name, dataCreated, salary}, (error, raw) => {
            if (error) {
                response.json(error);
            } else {
                response.json(raw);
            }
        });
    }, 
    details: (request, response) => {
        const _id = new ObjectId(request.params.id);  
        peopleModel.findById(_id, (error, doc) => {
            if (error) { 
                response.json(error);
            } else {
                response.json(doc);
            }
        });
    },
    remove: (request, response) => {
        try {
            const _id = new ObjectId(request.params.id);  
            peopleModel.deleteOne({_id: _id}, (error) => {
                if (error) {
                    response.json(error);
                }
            });
            response.json({_id: _id, delete: true});
        } catch (e) {
            response.json({error: e, delete: false});
        }
    }
}