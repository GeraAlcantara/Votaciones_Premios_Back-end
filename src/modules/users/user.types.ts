import { Document } from 'mongoose';

export type Profile = {
  displayName: string;
  avatar?: string | null;
  bio?: string | null;
  website?: string | null;
};

export type User = {
  email: string;
  username: string;
  role: string;
  profile: Profile;
};

export type Account = {
  provider: string;
  providerAccountId: string;
  username?: string | null;
  user: string;
};

export interface UserDocument extends User, Document {}

export interface AccountDocument extends Account, Document {}
