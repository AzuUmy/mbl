import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { WinstonModule } from 'nest-winston';
import { winstonTransports } from './Logs/Logger';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModules } from './Graphql/graphql.modules';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    GraphQLModules,
    WinstonModule.forRoot({
      transports: winstonTransports,
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
