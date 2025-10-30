import { Teams } from './Entities/teams.entity';
import { TeamsService } from './teams.service';
export declare class TeamsResolver {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    Teams(): Promise<Teams[]>;
}
