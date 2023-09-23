import passport from 'passport';
import { User } from '@app/modules/users/user.types';
import { DiscordStrategy } from '@app/modules/auth/strategies/discord.strategy';
import { GithubStrategy } from '@app/modules/auth/strategies/github.strategy';

passport.use(DiscordStrategy);
passport.use(GithubStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: User, done) => {
  done(null, user);
});

export default passport;
