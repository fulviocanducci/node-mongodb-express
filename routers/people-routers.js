const peopleController = require('../controllers/people-controller');

module.exports = (router) => {
    router.get('/api/peoples', peopleController.index);
    router.get('/api/people/:id', peopleController.details);
    router.post('/api/people', peopleController.create);
    router.put('/api/people/:id', peopleController.update);
    router.delete('/api/people/:id', peopleController.remove);
}