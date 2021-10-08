# Data Seralization

This project is an example to the use of the data seralizarion json, xml and yaml in a web service
<br/>
<br/>

## Installation
<hr/>

1. Copy this repository
2. Execute query of database in your MySQL
3. Run the command **npm install** in the terminal
4. Copy the file db.config.example and rename as db.config.js
5. Asigne your configuration in db.config.js
6. Run the server with the command **npm start** in the terminal

<br/>

## Web Service Paths

If you will like test the paths you install postman to send the request

<hr/>

### Json
<br/>

#### *- Getting Programming Languages with Json*

Path: http://localhost:82/api/json/languages

Method: GET
<br/><br/>

#### *- Create Programming Language with Json*

Path: http://localhost:82/api/json/languages

Method: POST

Body :
```
{
  "name": "NAME-PROGRAMMING-LANGUAGE",
  "released_year":  0,
  "github_rank": 0
}
```

Raw Type : JSON
<br/><br/>

### XML
<br/>

#### *- Getting Programming Languages with XML*

Path: http://localhost:82/api/xml/languages

Method: GET
<br/><br/>

#### *- Create Programming Language with Json*

Path: http://localhost:82/api/xml/languages

Method: POST

Body :

```
<?xml version="1.0" ?>
<programmingLanguage>
    <name>NAME-PROGRAMMING-LANGUAGE</name>
    <released_year>0</released_year>
    <github_rank>0</github_rank>
</programmingLanguage>
```
Raw Type : XML
<br/><br/>

### YAML
<br/>

#### *- Getting Programming Languages with XML*

Path: http://localhost:82/api/xml/languages

Method: GET
<br/><br/>

#### *- Create Programming Language with Json*

Path: http://localhost:82/api/xml/languages

Method: POST

Body :

```
programmingLanguage:
    name: "NAME-PROGRAMMING-LANGUAGE"
    released_year: 0
    github_rank: 0
```
Raw Type : TEXT
