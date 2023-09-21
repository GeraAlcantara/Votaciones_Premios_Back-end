import passport from 'passport';
import { Strategy as DiscordStrategy, Profile } from 'passport-discord';
import { config } from '@app/configs/app.config';
import { User } from '@app/modules/users/user.model';
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
      profile: Profile,
      done: (error?: null, user?: User) => void,
    ) => {
      const payload = {
        accountId: profile.id,
        provider: profile.provider,
        displayName: profile.displayName,
        username: profile.username,
        emails: profile.emails?.map((item) => item.value) || [],
      };

      const user = await createOrUpdateUser(
        profile.id,
        profile.provider,
        payload,
      );

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
