const express = require('express');

const { getProgrammingLanguagesYaml, createProgrammingLanguagesYaml } = require('../controller/programmingLanguages.controller');

const router = express.Router();

router.get('/languages', getProgrammingLanguagesYaml);
router.post('/languages', createProgrammingLanguagesYaml);

module.exports = router;
