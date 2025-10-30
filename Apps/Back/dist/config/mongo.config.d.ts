import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';
export declare const mongoConfig: {
    inject: (typeof ConfigService)[];
    useFactory: (config: ConfigService) => MongooseModuleFactoryOptions;
};
