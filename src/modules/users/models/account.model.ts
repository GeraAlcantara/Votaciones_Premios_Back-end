import mongoose, { Schema, Model, Types } from 'mongoose';
import { AccountDocument } from '@app/modules/users/user.types';

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

export const AccountModel = mongoose.model<
  AccountDocument,
  Model<AccountDocument>
>('Account', AccountSchema);
