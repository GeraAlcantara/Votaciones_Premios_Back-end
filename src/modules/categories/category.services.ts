import { CategoryModel } from '@app/modules/categories/models/category.model';
import { CategoryDocument } from '@app/modules/categories/category.type';

export const getAllCategories = async () => {
  return CategoryModel.find()
    .populate({
      path: 'winner',
      select: ['avatar', 'displayName'],
    })
    .select(['name', 'slug', 'description', 'winner']);
};

export const getCategoryBySlug = async (slug: string) => {
  return CategoryModel.findOne({ slug })
    .populate({
      path: 'winner',
      select: ['avatar', 'displayName'],
    })
    .select(['name', 'slug', 'description', 'winner']);
};

export const mapCategory = (category: CategoryDocument) => {
  return {
    id: category._id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    winner: category.winner,
  };
};
