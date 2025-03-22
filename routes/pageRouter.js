const { Router} = require('express');
const path = require('path');

const getPage = require('../controllers/pageController');

// create the router
const pageRouter = Router();

// put the logic into the router
pageRouter.get('/:page?',getPage);

module.exports = pageRouter;