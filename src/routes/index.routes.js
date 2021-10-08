const express = require('express');
const routes = express.Router();

const jsonRoutes = require('./json.routes');
const xmlRoutes = require('./xml.routes');
const yamlRoutes = require('./yaml.routes');

routes.use('/json', jsonRoutes);
routes.use('/xml', xmlRoutes);
routes.use('/yaml', yamlRoutes);

module.exports = {
  routes
};
