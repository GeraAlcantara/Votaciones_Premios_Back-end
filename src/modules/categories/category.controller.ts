import type { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import {
  getAllCategories,
  getCategoryById,
} from '@app/modules/categories/category.services';
import { Types } from 'mongoose';

export const getAll = async (req: Request, res: Response) => {
  const categories = await getAllCategories();
  return res.json(categories);
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return next(createHttpError.BadRequest('Invalid category id'));
  }
  const category = await getCategoryById(id);
  if (!category) {
    return next(createHttpError.NotFound('Category not found'));
  }
  return res.json(category);
};
