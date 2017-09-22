'use strict';

const express = require('express');
const app = express();

const isProduction = process.env.NODE_ENV === 'production'

/* MIDDLEWARE */

app.use(require('helmet')())
.use(require('compression')())
.use(require('cors')())
.disable('x-powered-by');

require("./routes.js")(app);

app.get('*', (req, res) => res.status(404).send('error: code not found!'));

app.listen(process.env.PORT || 3000, () => console.info(`Express server running on port 3000`));
