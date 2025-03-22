const { Router} = require('express');
const getPage = require('../controllers/getPage');

// create the router
const pageRouter = Router();

// put the logic into the router
pageRouter.get('/:page?',getPage);

module.exports = pageRouter;