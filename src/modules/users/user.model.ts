import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcrypt';

export type User = {
  name: string;
  email: string;
  password: string;
  picture: string;
  status: string;
};

export interface UserDocument extends User, Document {}

type UserModel = Model<UserDocument>;

const UserSchema: Schema<UserDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 32,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});

export const UserModel = mongoose.model<UserDocument, UserModel>(
  'User',
  UserSchema,
);
