import { User, UserDocument, UserModel } from '@app/modules/users/user.model';

export const createOrUpdateUser = async (
  accountId: string,
  provider: string,
  data: User,
) => {
  return UserModel.findOneAndUpdate({ accountId, provider }, data, {
    upsert: true,
    new: true,
  });
};

export const mapUser = (user: UserDocument): User => {
  const { username, displayName, emails, provider, accountId } = user;

  return {
    accountId,
    username,
    displayName,
    emails,
    provider,
  };
};
