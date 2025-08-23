import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import 'colors';

import connectDB from '../config/db';

dotenv.config();
import app from './app';

connectDB();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
