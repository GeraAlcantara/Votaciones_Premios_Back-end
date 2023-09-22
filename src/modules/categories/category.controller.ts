import type { Request, Response } from 'express';
import {
  getAllCategories,
  getCategoryById,
} from '@app/modules/categories/category.services';

export const getAll = async (req: Request, res: Response) => {
  const categories = await getAllCategories();
  return res.json(categories);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await getCategoryById(id);
  return res.json(category);
};
