import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';

interface CustomError extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
  path?: string;
  value?: any;
  keyValue?: any;
  errors?: any;
  kind?: string;
  code?: number;
  _message?: string;
}

const handleInvalidDBId = (err: CustomError): AppError => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: CustomError): AppError => {
  const value = err.keyValue?.name;
  const message = `Duplicate field value: "${value}". Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err: CustomError): AppError => {
  const errors = Object.values(err.errors || {}).map((el: any) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = (): AppError =>
  new AppError('Invalid token. Please log in again.', 401);

const handleJWTExpiredError = (): AppError =>
  new AppError('Token expired. Please log in again.', 401);

const sendErrorDev = (err: CustomError, res: Response): void => {
  res.status(err.statusCode || 500).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: CustomError, res: Response): void => {
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

export default (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
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
