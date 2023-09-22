import mongoose, { Document, Schema, Model, Types } from 'mongoose';

export type Account = {
  provider: string;
  providerAccountId: string;
  username: string | null;
  user: string;
};

export interface AccountDocument extends Account, Document {}

type AccountModel = Model<AccountDocument>;

const AccountSchema: Schema = new Schema(
  {
    provider: String,
    providerAccountId: String,
    username: {
      type: String,
      default: null,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    collection: 'accounts',
    timestamps: true,
  },
);

export const AccountModel = mongoose.model<AccountDocument, AccountModel>(
  'Account',
  AccountSchema,
);
