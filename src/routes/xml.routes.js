const express = require('express');

const { getProgrammingLanguagesXml, createProgrammingLanguagesXml } = require('../controller/programmingLanguages.controller');

const router = express.Router();

router.get('/languages', getProgrammingLanguagesXml);
router.post('/languages', createProgrammingLanguagesXml);
module.exports = router;
