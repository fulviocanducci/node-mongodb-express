const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/*
* Express Server Http
*/
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Oi');
});

/*
* Routers
*/

require('./routers/people-routers')(router);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', cors());

app.use('/', router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
});