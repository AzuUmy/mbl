// src/config/mongo.config.ts
import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const mongoConfig = {
  inject: [ConfigService],
  useFactory: (config: ConfigService): MongooseModuleFactoryOptions => ({
    uri: config.get<string>('MONGODB_URI'),
  }),
};

//a