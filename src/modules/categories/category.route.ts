import express from 'express';
import { isAuthenticated } from '@app/modules/auth/middlewares';
import { getAll, getById } from '@app/modules/categories/category.controller';

export const CategoryRouter = express.Router();

CategoryRouter.route('/').get(isAuthenticated, getAll);
CategoryRouter.route('/:id').get(isAuthenticated, getById);
