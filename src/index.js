const express = require('express');
const xmlExpress = require('express-xml-bodyparser');
const morgan = require('morgan');
const routes = require('./routes/index.routes');


const app = express();
const PORT = 82;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());
app.use(xmlExpress());


app.use('/api', routes.routes);

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});
