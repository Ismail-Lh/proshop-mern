import express from 'express';
import {
  authUser,
  protectedRoutes,
  signUpUser,
} from '../controllers/authController.js';
import {
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/signup', signUpUser);

// Protected Route
router.use(protectedRoutes);
router.route('/profile').get(getUserProfile).patch(updateUserProfile);

export default router;
