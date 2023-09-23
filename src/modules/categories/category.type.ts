import { Document } from 'mongoose';

export type Category = {
  name: string;
  slug: string;
  description: string;
  winner: string;
};

export interface CategoryDocument extends Category, Document {}
