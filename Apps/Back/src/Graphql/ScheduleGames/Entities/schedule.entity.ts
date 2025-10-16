// graphql/entities/schedule.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { League } from './legue.entity';
import { Game } from './games.entity';

@ObjectType()
export class ScheduleGames {
  @Field(() => League)
  league!: League;

  @Field()
  date!: string;

  @Field(() => [Game])
  games!: Game[];

  @Field()
  _comment!: string;
}