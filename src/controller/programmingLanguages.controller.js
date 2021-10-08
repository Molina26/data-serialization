const xml = require('xml-js');
const YAML = require('json-to-pretty-yaml');
const yamljs = require('yamljs');

const db = require('../config/db');
const helper = require('../config/helpers');


const getProgrammingLanguagesJson = async (req, res, next) => {

  try {
    const rows = await db.query('SELECT * FROM programming_languages', []);

    const data = helper.emptyOrRows(rows);

    const message = 'List of programming language';
    return res.json({ data, message, status: 200 });
  } catch (err) {
    console.error('Error while getting programming languages', err.message);
    return res.json({ data: {}, message: err.message, status: 400 });
  }
}

const createProgrammingLanguagesJson = async (req, res, next) => {
  let message = 'Error to create a programming language';
  let status = 400;
  const { name, released_year, github_rank } = req.body;

  try {
    // This code will be better in a procedure
    const uuid = await db.query('SELECT UUID() id', []);

    const [{ id }] = uuid;

    const result = await db.query('INSERT INTO programming_languages(id, name, released_year, github_rank) VALUES (?,?,?,?)', [id, name, released_year, github_rank]);

    let data = {};

    if (result.affectedRows) {
      status = 201;
      message = 'Programming language created successfully';
      const rows = await db.query('SELECT * FROM programming_languages WHERE id = ?', [id]);

      data = helper.emptyOrRows(rows);
    }

    return res.json({ data, message, status });
  } catch (err) {
    console.error('Error while create a programming languages', err.message);
    return res.json({ data: {}, message: err.message, status });
  }
}

const getProgrammingLanguagesXml = async (req, res, next) => {
  const options = { compact: true, ignoreComment: true, spaces: 4 };
  try {
    const rows = await db.query('SELECT * FROM programming_languages', []);

    const programmingLanguage = helper.emptyOrRows(rows);

    const message = 'List of programming language';
    const json = { data: { programmingLanguage }, message, status: 200 };

    const result = xml.json2xml(json, options);
    return res.send(result);
  } catch (err) {
    console.error('Error while getting programming languages', err.message);
    const json = { data: {}, message: err.message, status: 400 };
    const result = xml.json2xml(json, options);

    return res.send(result);
  }
}


const createProgrammingLanguagesXml = async (req, res, next) => {
  let message = 'Error to create a programming language';
  let status = 400;
  const optionsXml = { ignoreComment: true, alwaysChildren: true };
  const optionsJson = { compact: true, ignoreComment: true, spaces: 4 };

  const result = xml.xml2js(req.rawBody, optionsXml);

  const { elements } = result;

  const info = elements[0].elements;
  const object = [];

  info.forEach((e) => {
    object[e.name] = e.elements[0].text;
  });

  try {
    const { name, releaseds_year, github_rank } = object;
    // This code will be better in a procedure
    const uuid = await db.query('SELECT UUID() id', []);

    const [{ id }] = uuid;

    const result = await db.query('INSERT INTO programming_languages(id, name, released_year, github_rank) VALUES (?,?,?,?)', [id, name, released_year, github_rank]);

    let data = {};

    if (result.affectedRows) {
      status = 201;
      message = 'Programming language created successfully';
      const rows = await db.query('SELECT * FROM programming_languages WHERE id = ?', [id]);

      data = { programmingLanguage: helper.emptyOrRows(rows) };
    }

    const json = { data, message, status };
    const resultXml = xml.json2xml(json, optionsJson);

    return res.send(resultXml);
  } catch (err) {
    console.error('Error while create a programming languages with xml', err.message);
    const json = { data: {}, message: err.message, status: 400 };
    const resultXml = xml.json2xml(json, optionsJson);

    return res.send(resultXml);
  }
}

const getProgrammingLanguagesYaml = async (req, res, next) => {
  try {
    const rows = await db.query('SELECT * FROM programming_languages', []);

    const programmingLanguages = helper.emptyOrRows(rows);

    const message = 'List of programming language';
    const json = { data: { programmingLanguages }, message, status: 200 };

    const result = YAML.stringify(json)
    return res.send(result);
  } catch (err) {
    console.error('Error while getting programming languages with yaml', err.message);
    const json = { data: {}, message: err.message, status: 400 };
    const result = YAML.stringify(json);

    return res.send(result);
  }
}

const createProgrammingLanguagesYaml = async (req, res, next) => {

  const { programmingLanguage } = yamljs.parse(req.body);

  let message = 'Error to create a programming language';
  let status = 400;
  const { name, released_year, github_rank } = programmingLanguage;

  try {
    // This code will be better in a procedure
    const uuid = await db.query('SELECT UUID() id', []);

    const [{ id }] = uuid;

    const result = await db.query('INSERT INTO programming_languages(id, name, released_year, github_rank) VALUES (?,?,?,?)', [id, name, released_year, github_rank]);

    let data = {};

    if (result.affectedRows) {
      status = 201;
      message = 'Programming language created successfully';
      const rows = await db.query('SELECT * FROM programming_languages WHERE id = ?', [id]);

      data = { programmingLanguage: helper.emptyOrRows(rows) };

    }
    const json = { data, message, status };
    const yaml = YAML.stringify(json);
    return res.send(yaml);
  } catch (err) {
    console.error('Error while create a programming languages with yaml', err.message);
    const json = { data: {}, message: err.message, status };
    const yaml = YAML.stringify(json);
    return res.send(yaml);
  }
}


module.exports = {
  getProgrammingLanguagesJson,
  createProgrammingLanguagesJson,
  getProgrammingLanguagesXml,
  createProgrammingLanguagesXml,
  getProgrammingLanguagesYaml,
  createProgrammingLanguagesYaml
};
