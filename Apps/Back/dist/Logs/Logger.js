"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLogger = exports.winstonTransports = void 0;
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const isProduction = process.env.NODE_ENV === 'production';
exports.winstonTransports = [
    new winston_1.transports.Console({
        level: isProduction ? 'info' : 'debug',
        format: isProduction
            ? winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json())
            : winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.errors({ stack: true }), winston_1.format.splat(), nest_winston_1.utilities.format.nestLike('MyApp', {
                prettyPrint: true,
            })),
    }),
    ...(isProduction
        ? [
            new winston_daily_rotate_file_1.default({
                dirname: 'logs',
                filename: 'app-%DATE%.log',
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '14d',
                level: 'info',
                format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
            }),
            new winston_daily_rotate_file_1.default({
                dirname: 'logs',
                filename: 'error-%DATE%.log',
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '30d',
                level: 'error',
                format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
            }),
        ]
        : []),
];
exports.winstonLogger = (0, winston_1.createLogger)({
    level: isProduction ? 'info' : 'debug',
    transports: exports.winstonTransports,
    exitOnError: false,
});
//# sourceMappingURL=Logger.js.map