import type { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import {
  getAllCategories,
  getCategoryBySlug,
  mapCategory,
} from '@app/modules/categories/category.services';

export const getAll = async (req: Request, res: Response) => {
  const categories = await getAllCategories();
  const data = categories.map((category) => mapCategory(category));

  return res.json(data);
};

export const getBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { slug } = req.params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    return next(createHttpError.NotFound('Category not found'));
  }

  return res.json(mapCategory(category));
};
