import { Injectable } from '@nestjs/common';
import { ScheduleGames } from './Entities/schedule.entity';
import { Logger } from '@nestjs/common';
import { apiUrl, token, locale, format } from 'src/Api/api';
import { Games } from '@my-mlb/shared/Types/gamesMLBTypes';

@Injectable()
export class ScheduleService {
  async getSchedule(
    year: string,
    month: string,
    day: string,
  ): Promise<ScheduleGames> {
    const response = await fetch(
      `${apiUrl}/${locale}/games/${year}/${month}/${day}/schedule.${format}?api_key=${token}`,
    );

    Logger.log('Querying schedule Games');
    const data = await response.json();

    return {
      league: data.league,
      date: data.date,
      games: data.games.map((game: Games) => ({
        ...game,
        duration: game.duration ?? 'N/A',
      })),
      _comment: data._comment,
    };
  }
}
