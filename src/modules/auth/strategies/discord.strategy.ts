import { Profile, Strategy } from 'passport-discord';
import createHttpError from 'http-errors';
import { config } from '@app/configs/app.config';
import { User } from '@app/modules/users/user.types';
import { createOrUpdateUser } from '@app/modules/users/user.services';

export const DiscordStrategy = new Strategy(
  {
    clientID: config.discordClientId,
    clientSecret: config.discordClientSecret,
    callbackURL: `${config.baseUrl}/auth/discord/callback`,
    scope: ['identify', 'email'],
  },
  async (
    _accessToken: string,
    _refreshToken: string,
    profile: Profile | any,
    done: (error?: Error | null, user?: User) => void,
  ) => {
    const email = profile.email;

    if (!email) {
      return done(createHttpError.BadRequest('Email required'));
    }

    const userPayload = {
      email: email,
      username: profile?.username || `u-${profile.id}`,
      profile: {
        displayName: profile.global_name,
        avatar: profile?.avatar
          ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}`
          : null,
      },
    };

    const accountPayload = {
      provider: profile.provider,
      providerAccountId: profile.id,
      username: profile.username,
    };

    const user = await createOrUpdateUser(
      email,
      'discord',
      userPayload,
      accountPayload,
    );

    if (!user) {
      return done(createHttpError.InternalServerError('Server internal error'));
    }

    return done(null, user);
  },
);
