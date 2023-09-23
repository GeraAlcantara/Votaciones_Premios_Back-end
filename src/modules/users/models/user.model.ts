import mongoose, { Model, Schema } from 'mongoose';
import { UserDocument } from '@app/modules/users/user.types';

export enum UserRole {
  CANDIDATE = 'candidate',
  VOTER = 'voter',
}

const ProfileSchema: Schema = new Schema(
  {
    displayName: String,
    avatar: String,
    bio: { type: String, default: null },
    website: { type: String, default: null },
  },
  { _id: false },
);

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.VOTER,
    },
    profile: ProfileSchema,
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

export const UserModel = mongoose.model<UserDocument, Model<UserDocument>>(
  'User',
  UserSchema,
);
