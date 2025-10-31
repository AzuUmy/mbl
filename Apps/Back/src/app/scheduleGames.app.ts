import { Injectable } from '@nestjs/common';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGamesSeries } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';

@Injectable()
export class ScheduleGamesApp {
  constructor(private readonly scheduleService: ScheduleService) {}

  async getScheduleGamesSeries(
    startDate: string,
    endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    const scheduleGames = await this.scheduleService.getScheduleGames(
      startDate,
      endDate,
    );

    const scheduleGamesSeries: ScheduleGamesSeries[] = [];

    scheduleGames.forEach((schedule) => {
      const series = schedule.games.map((e) => e.ps_round);
      const games = schedule.games;

      series.forEach((serie) => {
        if (!scheduleGamesSeries.map((e) => e.series).includes(serie)) {
          scheduleGamesSeries.push({
            series: serie,
            games: games,
          });
        }
      });
    });

    return scheduleGamesSeries;
  }
}
