import { Injectable } from '@nestjs/common';
import { ScheduleGames, ScheduleGamesSeries } from './Entities/schedule.entity';
import { Logger } from '@nestjs/common';
import { Game } from './Entities/games.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScheduleGameDocument } from 'src/schema/scheduleGames/scheduleGames.schema';
import { ScheduleGames as games } from '@my-mlb/shared/Types/gamesMLBTypes';
@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleGames.name)
    private readonly scheduleGamesModel: Model<ScheduleGameDocument>,
  ) {}

  async getSchedule(
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
        // const response = await fetch(
        // `${apiUrl}/${locale}/games/${year}/${month}/${day}/schedule.${format}?api_key=${token}`,
        //);

        // const data = await response.json();

        const data = this.scheduleGamesModel.aggregate<games>([
          { $match: { 

           } 
          },
          {
            $sort: { _id: 1 },
          },
        ]);

        const games =
          (await data).map((game) => ({
            ...game,
            duration: game.games.map((e) => e.duration) ?? 'NA',
          })) ?? [];

        games.forEach((e) => {
          scheduleGames.push({
            league: e.league ?? null,
            date: e.date ?? `${month}-${day}`,
            games: e.games ?? [],
            _comment: e._comment ?? null,
          });
        });
      } catch (error) {
        Logger.warn(`No games found for the date ${month}, ${day}`);
      }
    }

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
