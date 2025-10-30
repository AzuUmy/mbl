"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.locale = exports.token = exports.apiUrl = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.apiUrl = process.env.BASE_URL;
exports.token = process.env.token;
exports.locale = process.env.locale;
exports.format = process.env.format;
//# sourceMappingURL=api.js.map