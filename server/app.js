import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

mongoose.connect('mongodb://homestar:homestar@ds139949.mlab.com:39949/reddit-api', () => {
  console.log('Connected to MongoDB...');
});

const app = express();

//Middlesware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;
