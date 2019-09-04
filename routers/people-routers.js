const peopleController = require('../controllers/people-controller');
const api_url_default = require('../utils/route-api-default');

module.exports = (router) => {
    router.get(api_url_default('peoples'), peopleController.index);
    router.get(api_url_default('people/:id'), peopleController.details);
    router.post(api_url_default('people'), peopleController.create);
    router.put(api_url_default('people/:id'), peopleController.update);
    router.delete(api_url_default('people/:id'), peopleController.remove);
}