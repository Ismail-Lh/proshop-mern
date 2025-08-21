import express from 'express';

import globalErrorHandler from '../controllers/errorController';
import AppError from '../utils/appError';
import productsRoutes from '../routes/productsRoutes';
import usersRoutes from '../routes/usersRoutes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/users', usersRoutes);

// Handling unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Implementing a global ERROR handling middleware
app.use(globalErrorHandler);

export default app;
