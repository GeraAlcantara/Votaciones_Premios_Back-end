import express from 'express';
import { getAll, getBySlug } from '@app/modules/categories/category.controller';

export const CategoryRouter = express.Router();

CategoryRouter.route('/').get(getAll);
CategoryRouter.route('/:slug').get(getBySlug);
