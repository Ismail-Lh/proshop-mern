import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';
import productsRoutes from './routes/productsRoutes.js';

dotenv.config();

connectDB();
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/products', productsRoutes);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
