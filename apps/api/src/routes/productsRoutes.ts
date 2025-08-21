import express from 'express';
import {
  getAllProducts,
  getProductById,
} from '../controllers/productController';

const router = express.Router();

router.route('/').get(getAllProducts);

router.route('/:id').get(getProductById);

export default router;
