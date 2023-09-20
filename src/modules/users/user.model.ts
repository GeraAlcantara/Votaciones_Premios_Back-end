import mongoose, { Document, Schema, Model } from 'mongoose';

export type User = {
  accountId: string;
  provider: string;
  displayName: string;
  username?: string;
  emails: string[];
};

export interface UserDocument extends User, Document {}

type UserModel = Model<UserDocument>;

const UserSchema: Schema<UserDocument> = new Schema(
  {
    accountId: String,
    provider: String,
    displayName: String,
    username: String,
    emails: [String],
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
