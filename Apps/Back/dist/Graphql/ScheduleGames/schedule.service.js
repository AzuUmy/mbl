"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_entity_1 = require("./Entities/schedule.entity");
const common_2 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ScheduleService = class ScheduleService {
    scheduleGamesModel;
    constructor(scheduleGamesModel) {
        this.scheduleGamesModel = scheduleGamesModel;
    }
    async getSchedule(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const scheduleGames = [];
        for (let i = new Date(start); i <= end; i.setDate(i.getDate() + 1)) {
            const month = String(i.getMonth() + 1).padStart(2, '0');
            const day = String(i.getDate()).padStart(2, '0');
            try {
                // const response = await fetch(
                // `${apiUrl}/${locale}/games/${year}/${month}/${day}/schedule.${format}?api_key=${token}`,
                //);
                // const data = await response.json();
                const data = this.scheduleGamesModel.aggregate([
                    { $match: {}
                    },
                    {
                        $sort: { _id: 1 },
                    },
                ]);
                const games = (await data).map((game) => ({
                    ...game,
                    duration: game.games.map((e) => e.duration) ?? 'NA',
                })) ?? [];
                games.forEach((e) => {
                    scheduleGames.push({
                        league: e.league ?? null,
                        date: e.date ?? `${month}-${day}`,
                        games: e.games ?? [],
                        _comment: e._comment ?? null,
                    });
                });
            }
            catch (error) {
                common_2.Logger.warn(`No games found for the date ${month}, ${day}`);
            }
        }
        const seriesMap = new Map();
        scheduleGames.forEach((day) => {
            day.games.forEach((game) => {
                const round = game.ps_round ?? 'Unknown';
                if (!seriesMap.has(round)) {
                    seriesMap.set(round, []);
                }
                seriesMap.get(round).push(game);
            });
        });
        const seriesGroups = Array.from(seriesMap.entries()).map(([series, games]) => ({
            series,
            games,
        }));
        return seriesGroups;
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schedule_entity_1.ScheduleGames.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map