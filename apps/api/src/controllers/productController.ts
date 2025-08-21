import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync';
import Product from '../models/productModel';
import AppError from '../utils/appError';

export const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    results: products.length,
    products,
  });
});

export const getProductById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return next(new AppError('404: No document found with that ID', 404));

  res.status(200).json(product);
});
