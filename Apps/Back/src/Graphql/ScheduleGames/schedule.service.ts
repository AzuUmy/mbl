// graphql/ScheduleGames/schedule.service.ts
import { Injectable } from '@nestjs/common';
import { ScheduleGames } from './Entities/schedule.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  async getSchedule(): Promise<ScheduleGames[]> {
    const response = await fetch('https://api.example.com/mlb/schedule');
    const data = await response.json();
    return data.map((item: any) => ({
      league: item.league,
      date: item.date,
      games: item.games,
      _comment: item._comment,
    }));
  }
}
