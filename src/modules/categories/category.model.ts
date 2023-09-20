import mongoose, { Document, Schema, Model } from 'mongoose';

export type Category = {
  name: string;
};

export interface CategoryDocument extends Category, Document {}

type CategoryModel = Model<CategoryDocument>;

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: 'categories',
    timestamps: true,
  },
);

export const CategoryModel = mongoose.model<CategoryDocument, CategoryModel>(
  'Category',
  CategorySchema,
);
