import { Resolver, Query } from '@nestjs/graphql';
import { Teams } from './Entities/teams.entity';
import { TeamsService } from './teams.service';
import { Logger } from '@nestjs/common';
import { apiUrl, format, token, locale } from 'src/Api/api';
import { Team } from '../ScheduleGames/Entities/team.entity';

@Resolver(() => Teams)
export class TeamsResolver {
  constructor(private readonly teamsService: TeamsService) {}

  @Query(() => [Teams], { name: 'Teams' })
  async Teams(): Promise<Teams[]> {
    try {
      const teams = this.teamsService.getAllTeams();

      return teams;
    } catch (error) {
      Logger.warn(`No Teams insertted ${error}`);
      return [];
    }
  }
}
