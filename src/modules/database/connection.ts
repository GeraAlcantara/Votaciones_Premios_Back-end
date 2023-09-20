import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '@app/configs/app.config';
import { Logger } from '@app/configs/logger.config';

const options: ConnectOptions = {
  autoIndex: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

export const connection = async () => {
  try {
    mongoose.connect(config.databaseUrl, options).then(() => {
      Logger.info('Connected to MongoDB');
    });
  } catch (error) {
    Logger.error(`MongoDB connection error: ${error}`);
  }
};
