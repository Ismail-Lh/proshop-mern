import AppError from '../utils/appError.js';

const handleInvalidDBId = err => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const value = err.keyValue.name;

  const message = `Duplicate field value: "${value}". Please use another value!`;

  return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;

  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again.', 401);

const handleJWTExpiredError = () =>
  new AppError('Token expired. Please log in again.', 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details to client
  } else {
    // 1- Log error to the console
    console.error('ERROR', err);

    // 2- Send generic message response
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
};

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.kind === 'ObjectId') error = handleInvalidDBId(error);

    if (error.code === 11000) error = handleDuplicateFieldsDB(error);

    if (error._message === 'Validation failed')
      error = handleValidationErrorDB(error);

    if (error.message === 'invalid signature') error = handleJWTError();
    if (error.message === 'jwt expired') error = handleJWTExpiredError();

    sendErrorProd(error, res);
  }
};
