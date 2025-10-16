// graphql/entities/league.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class League {
  @Field()
  alias!: string;

  @Field()
  name!: string;

  @Field(() => ID)
  id!: string;
}