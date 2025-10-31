import { Injectable } from '@nestjs/common';
import { ScheduleGames } from './Entities/schedule.entity';
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

  async getScheduleGames(startDate: string, endDate: string): Promise<games[]> {
    const scheduleGames = await this.scheduleGamesModel.aggregate([
      {
        $match: {
          date: { $gte: startDate, $lte: endDate },
        },
      },
    ]);

    return scheduleGames;
  }
}
