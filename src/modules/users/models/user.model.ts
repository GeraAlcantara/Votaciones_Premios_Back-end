import mongoose, { Document, Schema, Model } from 'mongoose';
import { Account } from '@app/modules/users/models/account.model';

export type User = {
  displayName: string;
  email: string;
  avatar: string | null;
};

export type UserWithAccount = {
  _id: string;
  user: {
    _id: string;
  } & User;
} & Omit<Account, 'user'>;

export interface UserDocument extends User, Document {}

type UserModel = Model<UserDocument>;

const UserSchema: Schema = new Schema(
  {
    displayName: String,
    email: {
      type: String,
      unique: true,
    },
    avatar: String,
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

export const UserModel = mongoose.model<UserDocument, UserModel>(
  'User',
  UserSchema,
);
