import express from 'express';
import { authUser, protectedRoutes } from '../controllers/authController.js';
import { getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', authUser);

// Protected Route
router.use(protectedRoutes);
router.route('/profile').get(getUserProfile);

export default router;
