"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConfig = void 0;
// src/config/mongo.config.ts
const config_1 = require("@nestjs/config");
exports.mongoConfig = {
    inject: [config_1.ConfigService],
    useFactory: (config) => ({
        uri: config.get('MONGODB_URI'),
    }),
};
//a
//# sourceMappingURL=mongo.config.js.map