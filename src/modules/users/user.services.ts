import { Account, User } from '@app/modules/users/user.types';
import { UserModel } from '@app/modules/users/models/user.model';
import { AccountModel } from '@app/modules/users/models/account.model';

type Provider = 'discord' | 'github';

export const createOrUpdateUser = async (
  email: string,
  provider: Provider,
  userPayload: Omit<User, 'role'>,
  accountPayload: Omit<Account, 'user'>,
): Promise<User> => {
  let user = await UserModel.findOne({ email });

  if (user) {
    await AccountModel.updateOne(
      { user: user._id, provider },
      { user: user._id, ...accountPayload },
      {
        upsert: true,
      },
    );
  } else {
    user = await UserModel.create(userPayload);
    await AccountModel.create({ user: user._id, ...accountPayload });
  }

  return user;
};
