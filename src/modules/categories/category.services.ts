import { CategoryModel } from '@app/modules/categories/models/category.model';

export const getAllCategories = async () => {
  const categories = await CategoryModel.find()
    .populate({
      path: 'winnerId',
      select: ['avatar', 'displayName'],
    })
    .select(['name', 'winnerId']);
  return categories;
};

export const getCategoryById = async (id: string) => {
  const category = await CategoryModel.findById(id)
    .populate({
      path: 'winnerId',
      select: ['avatar', 'displayName'],
    })
    .select(['name', 'winnerId']);
  return category;
};
