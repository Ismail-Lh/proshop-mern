import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import generateToken from '../utils/generateToken';

export const getUserProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user?._id);

  if (!user) return next(new AppError('User not found', 404));

  res.json({
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
  });
});

export const updateUserProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user?._id);

  if (!user) return next(new AppError('User not found', 404));

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  if (req.body.password) user.password = req.body.password;

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    email: updatedUser.email,
    name: updatedUser.name,
    isAdmin: updatedUser.isAdmin,
    token: generateToken(updatedUser._id),
  });
});
