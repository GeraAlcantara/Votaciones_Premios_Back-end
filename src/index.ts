import { config } from './configs/app.config';
import { Logger } from './configs/logger.config';
import { connection } from './modules/database/connection';
import { app } from './app';

connection().then(() => {
  app.listen(3000, () => {
    Logger.info(`Process ID: ${process.pid}`);
    Logger.info(`Server is listening on port: ${config.port}`);
  });
});
