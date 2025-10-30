import { Injectable } from '@nestjs/common';
import { ScheduleGames, ScheduleGamesSeries } from './Entities/schedule.entity';
import { Logger } from '@nestjs/common';
import { apiUrl, token, locale, format } from 'src/Api/api';
import { Games } from '@my-mlb/shared/Types/gamesMLBTypes';
import { Game } from './Entities/games.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ScheduleGameDocument,
} from 'src/schema/scheduleGames/scheduleGames.schema';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleGames.name)
    private readonly scheduleGamesModel: Model<ScheduleGameDocument>,
  ) {}

  async getSchedule(
    year: string,
    startDate: string,
    endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const scheduleGames: ScheduleGames[] = [];

    for (let i = new Date(start); i <= end; i.setDate(i.getDate() + 1)) {
      const month = String(i.getMonth() + 1).padStart(2, '0');
      const day = String(i.getDate()).padStart(2, '0');

      try {
        const response = await fetch(
          `${apiUrl}/${locale}/games/${year}/${month}/${day}/schedule.${format}?api_key=${token}`,
        );

        const data = await response.json();
        const games =
          data.games?.map((game: Games) => ({
            ...game,
            duration: game.duration ?? 'NA',
          })) ?? [];

        scheduleGames.push({
          league: data.league ?? null,
          date: data.date ?? `${year}-${month}-${day}`,
          games,
          _comment: data._comment ?? null,
        });


      } catch (error) {
        Logger.warn(`No games found for the date ${month}, ${day}`);
      }
    }

      await this.scheduleGamesModel.insertMany(scheduleGames)


    const seriesMap = new Map<string, Game[]>();

    scheduleGames.forEach((day) => {
      day.games.forEach((game) => {
        const round = game.ps_round ?? 'Unknown';
        if (!seriesMap.has(round)) {
          seriesMap.set(round, []);
        }
        seriesMap.get(round)!.push(game);
      });
    });

    const seriesGroups: ScheduleGamesSeries[] = Array.from(
      seriesMap.entries(),
    ).map(([series, games]) => ({
      series,
      games,
    }));

    return seriesGroups;
  }
}
