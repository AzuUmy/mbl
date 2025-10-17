import dotenv from 'dotenv';
dotenv.config();

export const apiUrl = process.env.BASE_URL
export const token = process.env.token
export const locale = process.env.locale
export const format = process.env.format