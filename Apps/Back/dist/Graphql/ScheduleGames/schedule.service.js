"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const api_1 = require("../../Api/api");
let ScheduleService = class ScheduleService {
    async getSchedule(year, startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const scheduleGames = [];
        for (let i = new Date(start); i <= end; i.setDate(i.getDate() + 1)) {
            const month = String(i.getMonth() + 1).padStart(2, '0');
            const day = String(i.getDate()).padStart(2, '0');
            try {
                const response = await fetch(`${api_1.apiUrl}/${api_1.locale}/games/${year}/${month}/${day}/schedule.${api_1.format}?api_key=${api_1.token}`);
                const data = await response.json();
                const games = data.games?.map((game) => ({
                    ...game,
                    duration: game.duration ?? 'NA',
                })) ?? [];
                scheduleGames.push({
                    league: data.league ?? null,
                    date: data.date ?? `${year}-${month}-${day}`,
                    games,
                    _comment: data._comment ?? null,
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
    (0, common_1.Injectable)()
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map