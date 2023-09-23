import { Strategy, Profile } from 'passport-github2';
import createHttpError from 'http-errors';
import { config } from '@app/configs/app.config';
import { User } from '@app/modules/users/user.types';
import { createOrUpdateUser } from '@app/modules/users/user.services';

export const GithubStrategy = new Strategy(
  {
    clientID: config.githubClientId,
    clientSecret: config.githubClientSecret,
    callbackURL: `${config.baseUrl}/auth/github/callback`,
    scope: ['email'],
  },
  async (
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: (error?: Error | null, user?: User) => void,
  ) => {
    const email = profile.emails?.length ? profile.emails[0].value : null;

    if (!email) {
      return done(createHttpError.BadRequest('Email required'));
    }

    const userPayload = {
      email,
      username: profile?.username || `u-${profile.id}`,
      profile: {
        displayName: profile.displayName,
        avatar: profile.photos?.length ? profile.photos[0].value : null,
      },
    };

    const accountPayload = {
      provider: profile.provider,
      providerAccountId: profile.id,
      username: profile.username,
    };

    const user = await createOrUpdateUser(
      email,
      'github',
      userPayload,
      accountPayload,
    );

    if (!user) {
      return done(createHttpError.InternalServerError('Server internal error'));
    }

    return done(null, user);
  },
);
