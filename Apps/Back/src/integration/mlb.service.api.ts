import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';

@Injectable()
export class MlbServiceApi {
  constructor(private readonly scheduleGamesApp: ScheduleGamesApp) {}

  async fetchDailyScheduleGames() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');


    console.log('running cron job to fetch daily schedule games');

    console.log(year, month, day)

    //await this.scheduleGamesApp.getScheduleGamesFromApi(year, month, day);
  }

}
