import mongoose, { Schema, Model, Types } from 'mongoose';
import { CategoryDocument } from '@app/modules/categories/category.type';

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    winner: {
      type: Types.ObjectId,
      default: null,
      ref: 'User',
    },
  },
  {
    collection: 'categories',
    timestamps: true,
  },
);

export const CategoryModel = mongoose.model<
  CategoryDocument,
  Model<CategoryDocument>
>('Category', CategorySchema);
