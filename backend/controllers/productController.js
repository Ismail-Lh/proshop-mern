import catchAsync from '../utils/catchAsync.js';
import Product from '../models/productModel.js';

export const getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    results: products.length,
    products,
  });
});

export const getProductById = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return next(new AppError('404: No document found with that ID', 404));

  res.status(200).json({
    status: 'success',
    product,
  });
});
