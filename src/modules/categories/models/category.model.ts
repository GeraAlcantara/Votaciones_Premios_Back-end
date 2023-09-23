import mongoose, { Document, Schema, Model, Types } from 'mongoose';

export type Category = {
  name: string;
  winnerId: string;
};

export interface CategoryDocument extends Category, Document {}

type CategoryModel = Model<CategoryDocument>;

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    winnerId: {
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

export const CategoryModel = mongoose.model<CategoryDocument, CategoryModel>(
  'Category',
  CategorySchema,
);
