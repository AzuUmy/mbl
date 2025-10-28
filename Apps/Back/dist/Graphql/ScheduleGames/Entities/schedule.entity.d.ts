import { League } from './legue.entity';
import { Game } from './games.entity';
export declare class ScheduleGames {
    league: League;
    date: string;
    games: Game[];
    _comment?: string;
    seriesGroups?: ScheduleGamesSeries[];
}
export declare class ScheduleGamesSeries {
    series: string;
    games: Game[];
}
