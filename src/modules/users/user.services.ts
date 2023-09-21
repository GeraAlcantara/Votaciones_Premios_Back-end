import {
  User,
  UserModel,
  UserWithAccount,
} from '@app/modules/users/models/user.model';
import { Account, AccountModel } from '@app/modules/users/models/account.model';

type Provider = 'discord' | 'github';

export const createOrUpdateUser = async (
  email: string,
  provider: Provider,
  userPayload: User,
  accountPayload: Omit<Account, 'user'>,
): Promise<UserWithAccount | null> => {
  const user = await UserModel.findOneAndUpdate({ email }, userPayload, {
    upsert: true,
    new: true,
  });

  await AccountModel.updateOne(
    { _id: user._id, provider },
    { user: user._id, ...accountPayload },
    {
      upsert: true,
    },
  );

  return AccountModel.findOne({ userId: user._id })
    .select(['provider', 'providerAccountId', 'username'])
    .populate({
      path: 'user',
      select: ['email', 'avatar', 'displayName'],
    });
};
