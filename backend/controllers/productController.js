import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      data: products,
    },
  });
});

export const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) res.status(404).json({ message: 'Product not found' });

  res.status(200).json({
    status: 'success',
    data: {
      data: product,
    },
  });
});
