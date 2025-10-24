// graphql/entities/schedule.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { League } from './legue.entity';
import { Game } from './games.entity';

@ObjectType()
export class ScheduleGames {
  @Field(() => League, {nullable: true})
  league!: League;

  @Field( {nullable: true})
  date!: string;

  @Field(() => [Game], {nullable: true})
  games!: Game[];

  @Field({ nullable: true })
  _comment?: string;
}