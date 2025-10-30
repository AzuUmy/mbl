import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Games } from './games.schema';
import { League } from './league.schema';

@Schema({ collection: 'schedulegames'})
export class ScheduleGames {
  @Prop({ type: Object })
  league?: League;

  @Prop()
  date?: string;

  @Prop({ type: [Object] })
  games!: Games[];
}

export type ScheduleGameDocument = ScheduleGames & Document;
export const ScheduleGamesSchema = SchemaFactory.createForClass(ScheduleGames);