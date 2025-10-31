// src/cron/cron.service.ts
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class CronService {
  logStartup() {
   Logger.log('Cron Service has started successfully.', 'CronService');
  }
}