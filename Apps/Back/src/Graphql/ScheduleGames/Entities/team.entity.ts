// graphql/entities/team.entity.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Team {
  @Field()
  name!: string;

  @Field()
  market!: string;

  @Field()
  abbr!: string;

  @Field(() => ID)
  id!: string;

  @Field(() => Int)
  seed!: number;

  @Field(() => Int)
  win!: number;

  @Field(() => Int)
  loss!: number;
}