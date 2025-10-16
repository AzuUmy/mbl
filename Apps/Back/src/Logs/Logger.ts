// src/logger/winston.config.ts
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { format, transports, createLogger } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const isProduction = process.env.NODE_ENV === 'production';

export const winstonTransports = [
  new transports.Console({
    level: isProduction ? 'info' : 'debug',
    format: isProduction
      ? format.combine(
          format.timestamp(),
          format.errors({ stack: true }),
          format.splat(),
          format.json()
        )
      : format.combine(
          format.colorize(),
          format.timestamp(),
          format.errors({ stack: true }),
          format.splat(),
          nestWinstonModuleUtilities.format.nestLike('MyApp', {
            prettyPrint: true,
          })
        ),
  }),
  ...(isProduction
    ? [
        new DailyRotateFile({
          dirname: 'logs',
          filename: 'app-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
          level: 'info',
          format: format.combine(format.timestamp(), format.json()),
        }),
        new DailyRotateFile({
          dirname: 'logs',
          filename: 'error-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '30d',
          level: 'error',
          format: format.combine(format.timestamp(), format.json()),
        }),
      ]
    : []),
];

export const winstonLogger = createLogger({
  level: isProduction ? 'info' : 'debug',
  transports: winstonTransports,
  exitOnError: false,
});
