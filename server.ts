require('dotenv').config();
import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import {join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
const api = require('./routes/api');


// Express server
const app = express();

//connect mongoDB
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err, db) => {
  err ? console.log(err) : console.log('Connect To MongoDB!')
});

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
app.use('/api', api);
// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
