import mongoose from 'mongoose';
import { connection } from '@app/modules/database/connection';
import { CategoryModel } from '@app/modules/categories/models/category.model';
import mockCategories from '@app/modules/database/data/categories.json';
import { Logger } from '@app/configs/logger.config';

connection()
  .then(async () => {
    const categories = await CategoryModel.find();

    if (categories.length === 0) {
      const data = mockCategories.map((category) => ({
        ...category,
        slug: category.name.toLowerCase().split(' ').join('-'),
      }));
      await CategoryModel.insertMany(data);
    }

    Logger.info('Migrations completed');
  })
  .finally(() => mongoose.disconnect());
