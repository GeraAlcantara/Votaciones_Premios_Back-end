import passport from 'passport';
import { Strategy as DiscordStrategy, Profile } from 'passport-discord';
import createHttpError from 'http-errors';
import { config } from '@app/configs/app.config';
import { User, UserWithAccount } from '@app/modules/users/models/user.model';
import { createOrUpdateUser } from '@app/modules/users/user.services';

passport.use(
  new DiscordStrategy(
    {
      scope: ['identify', 'email'],
      clientID: config.discordClientId,
      clientSecret: config.discordClientSecret,
      callbackURL: `${config.baseUrl}/auth/discord/callback`,
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile | any,
      done: (error?: Error | null, user?: UserWithAccount) => void,
    ) => {
      console.log(profile);
      if (!profile.email) {
        return done(createHttpError.BadRequest('Email required'));
      }

      const userPayload = {
        displayName: profile.global_name,
        email: profile.email,
        avatar: profile?.avatar || null,
      };

      const accountPayload = {
        provider: profile.provider,
        providerAccountId: profile.id,
        username: profile.username,
      };

      const user = await createOrUpdateUser(
        profile.email,
        profile.provider,
        userPayload,
        accountPayload,
      );

      if (!user) {
        return done(
          createHttpError.InternalServerError('Server internal error'),
        );
      }

      return done(null, user);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: User, done) => {
  done(null, user);
});

export default passport;
