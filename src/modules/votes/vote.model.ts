import mongoose, { Document, Schema, Model, Types } from 'mongoose';

export type Vote = {
  userId: string;
  categoryId: string;
  reason: string;
};

export interface VoteDocument extends Vote, Document {}

type VoteModel = Model<VoteDocument>;

const VoteSchema: Schema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    categoryId: {
      type: Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'votes',
    timestamps: true,
  },
);

export const VoteModel = mongoose.model<VoteDocument, VoteModel>(
  'Vote',
  VoteSchema,
);
