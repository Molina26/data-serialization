const express = require('express');

const { getProgrammingLanguagesJson, createProgrammingLanguagesJson } = require('../controller/programmingLanguages.controller');

const router = express.Router();

router.get('/languages', getProgrammingLanguagesJson);
router.post('/languages', createProgrammingLanguagesJson);

module.exports = router;
