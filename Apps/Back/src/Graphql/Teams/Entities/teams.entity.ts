import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Teams {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field({nullable: true})
  market?: string;

  @Field({nullable: true})
  abbr?: string;
}
